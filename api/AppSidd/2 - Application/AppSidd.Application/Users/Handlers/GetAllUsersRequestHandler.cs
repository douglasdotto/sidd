using AppSidd.Application.Dto;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Users.Auth;
using AppSidd.Domain.Users.Auth.JWT;
using AppSidd.Dto.ResponsePatterns;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.Users.Handlers
{
    public class GetAllUsersRequestHandler : IRequestHandler<GetAllUsersRequest, ResponseAllDto<List<UserDto>>>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly INotification _notification;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;

        public GetAllUsersRequestHandler(IUnitOfWork uow
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

        public async Task<ResponseAllDto<List<UserDto>>> Handle(GetAllUsersRequest request, CancellationToken cancellationToken)
        {
            var users = _userManager.Users.OrderBy(x => x.UserName).ToList();

            List<UserDto> result = new List<UserDto>();
            foreach (var user in users)
            {
                var userInfo = _mapper.Map<UserDto>(user);
                var roles = new List<string>();
                List<RoleDto> rolesList = new List<RoleDto>();
                var rolesAux = await _userManager.GetRolesAsync(user);
                if (rolesAux != null && rolesAux.Count > 0)
                {
                    if (rolesAux.Contains(Roles.ROLE_ADMIN))
                    {
                        RoleDto roleDto = new RoleDto();
                        roleDto.Name = "Administrador do Sistema";
                        rolesList.Add(roleDto);
                    }
                    else
                    {
                        RoleDto roleDto = new RoleDto();
                        roleDto.Name = "Sem permissao";
                        rolesList.Add(roleDto);
                    }
                }
                else
                {
                    RoleDto roleDto = new RoleDto();
                    roleDto.Name = "Sem permissao";
                    rolesList.Add(roleDto);
                }
                userInfo.Roles = rolesList;
                result.Add(userInfo);
            }

            result = result.OrderBy(x => x.UserName).ToList();

            var resultado = new ResponseAllDto<List<UserDto>>(result, result.Count(), result.Count());
            return resultado;
        }
    }
}
