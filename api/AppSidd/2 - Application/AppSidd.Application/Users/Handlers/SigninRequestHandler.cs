using AutoMapper;
using AppSidd.Application.Dto;
using AppSidd.Application.Dto.Response;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Users.Auth;
using AppSidd.Domain.Users.Auth.JWT;
using AppSidd.Domain.Users.Interfaces.Factory;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.Users.Handlers
{
    public class SigninRequestHandler : IRequestHandler<SigninRequest, TokenResultDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly INotification _notification;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IAppUserFactory _appUserFactory;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly TokenConfigurations _tokenConfigurations;
        private readonly SigningConfigurations _signingConfigurations;
        private readonly IMapper _mapper;

        public SigninRequestHandler(IUnitOfWork uow
            , UserManager<AppUser> userManager
            , RoleManager<AppRole> roleManager
            , SignInManager<AppUser> signInManager
            , IAppUserFactory appUserFactory
            , TokenConfigurations tokenConfigurations
            , INotification notification
            , SigningConfigurations signingConfigurations
            , IMapper mapper)
        {
            _uow = uow;
            _notification = notification;
            _userManager = userManager;
            _roleManager = roleManager;
            _appUserFactory = appUserFactory;
            _tokenConfigurations = tokenConfigurations;
            _signInManager = signInManager;
            _signingConfigurations = signingConfigurations;
            _mapper = mapper;
        }

        public async Task<TokenResultDto> Handle(SigninRequest request, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(request.Request.UserName) || string.IsNullOrEmpty(request.Request.Password))
            {
                _notification.DefaultBuilder()
                                .WithCode("SignIn_01")
                                .WithMessage("Nome de usuário e/ou senha incorretos.")
                                .RaiseNotification();
            }

            var requestLogin = request.Request.UserName;
            var requestPassword = request.Request.Password;

            var appUser = await _userManager.FindByEmailAsync(requestLogin);
            if (appUser == null)
            {
                appUser = await _userManager.FindByNameAsync(requestLogin);
                if (appUser == null)
                {
                    _notification.DefaultBuilder()
                                .WithCode("SignIn_02")
                                .WithMessage("Nome de usuário e/ou senha incorretos.")
                                .RaiseNotification();

                    return null;
                }
            }

            if (!appUser.IsActive)
            {
                _notification.DefaultBuilder()
                            .WithCode("SignIn_02")
                            .WithMessage("Usuário desativado.")
                            .RaiseNotification();

                return null;
            }

            var passwordOk = await _signInManager.CheckPasswordSignInAsync(appUser, request.Request.Password, false);
            if (!passwordOk.Succeeded)
            {
                _notification.DefaultBuilder()
                                .WithCode("SignIn_03")
                                .WithMessage("Nome de usuário e/ou senha incorretos.")
                                .RaiseNotification();
                return null;
            }

            var roles = await _userManager.GetRolesAsync(appUser);
            roles = roles.Distinct().ToList();

            if (roles == null || roles.Count == 0)
            {
                _notification.DefaultBuilder()
                                .WithCode("SignIn_04")
                                .WithMessage("Você não está autorizado a acessar o sistema.")
                                .RaiseNotification();

                return null;
            }

            var claims = new List<Claim>() {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N"))
                , new Claim(JwtRegisteredClaimNames.UniqueName, appUser.Id)
                , new Claim(ClaimTypes.Email, appUser.Email)
                , new Claim(ClaimTypes.GivenName, appUser.FirstName + " " + appUser.LastName)
                , new Claim(ClaimTypes.NameIdentifier, appUser.Id.ToString())
            };

            List<AppRole> rolesList = new List<AppRole>();
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
                var approle = await _roleManager.FindByNameAsync(role);
                rolesList.Add(approle);
            }

            ClaimsIdentity identity = new ClaimsIdentity(new GenericIdentity(appUser.UserName, "Login"), claims);

            DateTime dateCreate = DateTime.UtcNow;
            DateTime expirationDate = dateCreate.AddDays(_tokenConfigurations.Days);
            var handler = new JwtSecurityTokenHandler();
            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = _tokenConfigurations.Issuer,
                Audience = _tokenConfigurations.Audience,
                SigningCredentials = _signingConfigurations.SigningCredentials,
                Subject = identity,
                NotBefore = dateCreate,
                Expires = expirationDate
            });

            var token = handler.WriteToken(securityToken);

            var resultReturn = _mapper.Map<UserDto>(appUser);
            List<RoleDto> rolesUser = new List<RoleDto>();
            foreach (var role in rolesList)
            {
                RoleDto roleDto = new RoleDto();
                roleDto.Id = role.Id;
                roleDto.Name = role.Name;
                rolesUser.Add(roleDto);
            }
            resultReturn.Roles = rolesUser;

            return new TokenResultDto
            {
                Id = appUser.Id.ToString(),
                Authenticated = true,
                Created = dateCreate,
                Expiration = expirationDate,
                AccessToken = token,
                Roles = roles.ToList(),
                User = resultReturn,
                Identity = identity
            };
        }
    }
}
