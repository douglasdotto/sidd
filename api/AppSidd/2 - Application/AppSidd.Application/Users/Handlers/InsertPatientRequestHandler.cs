using AppSidd.Application.Dto;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Users.Auth;
using AppSidd.Domain.Users.Auth.JWT;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Globalization;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.Users.Handlers
{
    public class InsertPatientRequestHandler : IRequestHandler<InsertPatientRequest, UserDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IMapper _mapper;
        private readonly INotification _notification;

        public InsertPatientRequestHandler(IUnitOfWork uow
            , IMapper mapper
            , SignInManager<AppUser> signInManager
            , UserManager<AppUser> userManager
            , RoleManager<AppRole> roleManager
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _signInManager = signInManager;
            _userManager = userManager;
            _roleManager = roleManager;
            _notification = notification;
        }

        public async Task<UserDto> Handle(InsertPatientRequest request, CancellationToken cancellationToken)
        {
            var userName = Regex.Replace(request.User.FirstName + request.User.LastName, @"\s+", "").ToLower();
            var find = await _userManager.FindByNameAsync(userName);

            if (find == null)
            {
                var _appUserFactory = new AppUserFactory(new NotificationHandler());
                var first = request.User.FirstName.ToLower();
                var last = request.User.LastName.ToLower();
                var appUser = _appUserFactory.DefaultBuilder()
                    .WithEmail(userName + "@sidd.com.br")
                    .WithUserName(userName)
                    .WithFirstName(char.ToUpper(first[0]) + first.Substring(1))
                    .WithLastName(char.ToUpper(last[0]) + last.Substring(1))
                    .WithSexo(request.User.Sexo)
                    .WithIdadeData(DateTime.ParseExact(request.User.IdadeData, "dd/MM/yyyy", CultureInfo.InvariantCulture))
                    .WithEstadoCivil(request.User.EstadoCivil)
                    .WithTempoDeEstudo(request.User.TempoDeEstudo)
                    .WithTrabalho(request.User.Trabalho)
                    .Raise();

                if (!appUser.IsValid)
                {
                    _notification
                            .DefaultBuilder()
                            .WithCode("InsertUser_01")
                            .WithMessage("Não foi possível criar o usuário.")
                            .RaiseNotification();

                    return null;
                }

                appUser.IsActive = true;

                var result = await _userManager.CreateAsync(appUser, "sidd123");
                if (!result.Succeeded)
                {
                    foreach (var error in result.Errors)
                    {
                        _notification
                            .DefaultBuilder()
                            .WithCode(error.Code)
                            .WithMessage(error.Description)
                            .RaiseNotification();
                    }

                    return null;
                }

                await _userManager.AddToRoleAsync(appUser, Roles.ROLE_PATIENT);
                var user = _mapper.Map<UserDto>(appUser);
                return user;
            }
            else
            {
                _notification.DefaultBuilder()
                                    .WithCode("InsertUser_02")
                                    .WithMessage("Este usuário já existe.")
                                    .RaiseNotification();

                return null;
            }
        }
    }
}
