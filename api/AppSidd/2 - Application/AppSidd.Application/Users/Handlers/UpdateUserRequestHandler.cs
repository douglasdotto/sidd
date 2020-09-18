using AutoMapper;
using AppSidd.Application.Dto;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Users;
using AppSidd.Domain.Users.Auth;
using AppSidd.Domain.Users.Auth.JWT;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.Users.Handlers
{
    public class UpdateUserRequestHandler
        : IRequestHandler<UpdateUserRequest, UserDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly INotification _notification;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;

        public UpdateUserRequestHandler(IUnitOfWork uow
            , INotification notification
            , UserManager<AppUser> userManager
            , RoleManager<AppRole> roleManager
            , IMapper mapper)
        {
            _uow = uow;
            _notification = notification;
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
        }

        public async Task<UserDto> Handle(UpdateUserRequest request, CancellationToken cancellationToken)
        {
            AppUser user = null;
            Guid userIdGuid;
            if (String.IsNullOrEmpty(request.User.Id) || !Guid.TryParse(request.User.Id, out userIdGuid))
            {
                _notification.DefaultBuilder()
                               .WithCode("UpdateUser_01")
                               .WithMessage("O código do usuário informado é inválido.")
                               .RaiseNotification();

                return null;
            }

            var appUser = await _userManager.FindByIdAsync(request.User.Id.ToString());
            appUser.FirstName = request.User.FirstName;
            appUser.LastName = request.User.LastName;
            appUser.Email = request.User.Email;
            appUser.IsActive = request.User.IsActive;

            if (!String.IsNullOrEmpty(request.UnityId))
            {
                appUser.UnityId = new Guid(request.UnityId);
            }
            else
            {
                appUser.UnityId = null;
            }

            await _userManager.RemoveFromRoleAsync(appUser, Roles.ROLE_ADMIN);

            if (request.Role == Roles.ROLE_ADMIN)
                await _userManager.AddToRoleAsync(appUser, Roles.ROLE_ADMIN);

            await _userManager.UpdateAsync(appUser);

            await _uow.Save();

            var userReturn = _mapper.Map<UserDto>(user);

            return userReturn;
        }
    }
}
