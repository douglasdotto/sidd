using AppSidd.Application.Dto;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Users.Auth;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Linq.Dynamic;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.Users.Handlers
{
    public class GetInfoDashRequestHandler : IRequestHandler<GetInfoDashRequest, DashDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly INotification _notification;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;

        public GetInfoDashRequestHandler(IUnitOfWork uow
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

        public async Task<DashDto> Handle(GetInfoDashRequest request, CancellationToken cancellationToken)
        {
            var cdr = _uow.CDRRepository.Find(x => !x.IsDeleted).Count();
            var meem = _uow.MEEMRepository.Find(x => !x.IsDeleted).Count();
            var moca = _uow.MoCARepository.Find(x => !x.IsDeleted).Count();
            var pfeffer = _uow.PfefferRepository.Find(x => !x.IsDeleted).Count();
            var testeSintoma = _uow.TesteSintomaRepository.Find(x => !x.IsDeleted).Select(x => x.Created).Distinct().Count();
            DashDto totais = new DashDto
            {
                CDR = cdr,
                MoCA = moca,
                MEEM = meem,
                Pfeffer = pfeffer,
                TesteSintomas = testeSintoma
            };
            return totais;
        }
    }
}
