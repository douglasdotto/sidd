using AutoMapper;
using AppSidd.Application.Dto;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Users.Auth;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.Users.Handlers
{
    public class GetUserByIdRequestHandler : IRequestHandler<GetUserByIdRequest, UserDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IMapper _mapper;
        private readonly INotification _notification;

        public GetUserByIdRequestHandler(IUnitOfWork uow
            , IMapper mapper
            , UserManager<AppUser> userManager
            , RoleManager<AppRole> roleManager
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _userManager = userManager;
            _roleManager = roleManager;
            _notification = notification;
        }

        public async Task<UserDto> Handle(GetUserByIdRequest request, CancellationToken cancellationToken)
        {
            var appUser = await _userManager.FindByIdAsync(request.Key.ToString());
            if (appUser == null)
            {
                _notification.DefaultBuilder()
                    .WithCode("GetUserByLogin_01")
                    .WithMessage("Usuário não encontrado.")
                    .RaiseNotification();

                return null;
            }

            var roles = await _userManager.GetRolesAsync(appUser);
            if (roles == null)
            {
                _notification.DefaultBuilder()
                    .WithCode("GetUserByLogin_02")
                    .WithMessage("Usuário não possui nenhuma permissão no sistema.")
                    .RaiseNotification();

                return null;
            }

            List<AppRole> rolesList = new List<AppRole>();
            foreach (var role in roles)
            {
                var approle = await _roleManager.FindByNameAsync(role);
                rolesList.Add(approle);
            }

            var result = _mapper.Map<UserDto>(appUser);
            List<RoleDto> rolesUser = new List<RoleDto>();
            foreach (var role in rolesList)
            {
                RoleDto roleDto = new RoleDto();
                roleDto.Id = role.Id;
                roleDto.Name = role.Name;
                rolesUser.Add(roleDto);
            }
            result.Roles = rolesUser;

            return result;
        }
    }
}
