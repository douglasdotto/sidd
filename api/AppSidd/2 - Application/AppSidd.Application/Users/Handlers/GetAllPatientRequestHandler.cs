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
    public class GetAllPatientRequestHandler : IRequestHandler<GetAllPatientRequest, ResponseAllDto<List<UserDto>>>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly INotification _notification;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;

        public GetAllPatientRequestHandler(IUnitOfWork uow
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

        public async Task<ResponseAllDto<List<UserDto>>> Handle(GetAllPatientRequest request, CancellationToken cancellationToken)
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
                    if (rolesAux.Contains(Roles.ROLE_PATIENT))
                    {
                        RoleDto roleDto = new RoleDto();
                        roleDto.Name = "Paciente";
                        rolesList.Add(roleDto);
                        userInfo.Roles = rolesList;

                        var total = 0;
                        total += _uow.CDRRepository.Find(x => x.UserId == userInfo.Id && !x.IsDeleted).Count();
                        total += _uow.MEEMRepository.Find(x => x.UserId == userInfo.Id && !x.IsDeleted).Count();
                        total += _uow.MoCARepository.Find(x => x.UserId == userInfo.Id && !x.IsDeleted).Count();
                        total += _uow.GDSRepository.Find(x => x.UserId == userInfo.Id && !x.IsDeleted).Count();
                        total += _uow.PfefferRepository.Find(x => x.UserId == userInfo.Id && !x.IsDeleted).Count();
                        userInfo.TotalTests = total;
                        result.Add(userInfo);
                    }
                }
            }

            result = result.OrderBy(x => x.UserName).ToList();

            var resultado = new ResponseAllDto<List<UserDto>>(result, result.Count(), result.Count());
            return resultado;
        }
    }
}
