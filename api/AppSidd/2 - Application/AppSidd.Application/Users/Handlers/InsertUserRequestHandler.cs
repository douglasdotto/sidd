using AutoMapper;
using AppSidd.Application.Users;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Users.Auth;
using AppSidd.Domain.Users.Auth.JWT;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.Users.Handlers
{
    public class InsertUserRequestHandler : IRequestHandler<InsertUserRequest, bool>
    {
        private readonly IUnitOfWork _uow;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IMapper _mapper;
        private readonly INotification _notification;

        public InsertUserRequestHandler(IUnitOfWork uow
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

        public async Task<bool> Handle(InsertUserRequest request, CancellationToken cancellationToken)
        {
            var find = await _userManager.FindByNameAsync(request.User.UserName);

            if (find == null)
            {
                var _appUserFactory = new AppUserFactory(new NotificationHandler());
                var appUser = _appUserFactory.DefaultBuilder()
                    .WithEmail(request.User.Email)
                    .WithUserName(request.User.UserName)
                    .WithFirstName(request.User.FirstName)
                    .WithLastName(request.User.LastName)
                    .Raise();

                if (!appUser.IsValid)
                {
                    _notification
                            .DefaultBuilder()
                            .WithCode("InsertUser_01")
                            .WithMessage("Não foi possível criar o usuário.")
                            .RaiseNotification();

                    return false;
                }

                if (!String.IsNullOrEmpty(request.UnityId))
                {
                    appUser.UnityId = new Guid(request.UnityId);
                }
                else
                {
                    appUser.UnityId = null;
                }


                appUser.IsActive = request.User.IsActive;

                var result = await _userManager.CreateAsync(appUser, request.User.Password);
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

                    return false;
                }

                if (request.Role == Roles.ROLE_ADMIN)
                    await _userManager.AddToRoleAsync(appUser, Roles.ROLE_ADMIN);
            }
            else
            {
                _notification.DefaultBuilder()
                                    .WithCode("InsertUser_02")
                                    .WithMessage("Este usuário já existe.")
                                    .RaiseNotification();

                return false;
            }

            return true;
        }
    }
}
