using AutoMapper;
using AppSidd.Application.Users;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Users.Auth;
using AppSidd.Domain.Users.Auth.JWT;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.Users.Handlers
{
    public class SeedAdminDataRequestHandler : IRequestHandler<SeedAdminRequest, bool>
    {
        private readonly IUnitOfWork _uow;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IMapper _mapper;
        private readonly INotification _notification;

        public SeedAdminDataRequestHandler(IUnitOfWork uow
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

        public async Task<bool> Handle(SeedAdminRequest request, CancellationToken cancellationToken)
        {
            var find = await _userManager.FindByNameAsync("admin");

            if (find == null)
            {
                var _appUserFactory = new AppUserFactory(new NotificationHandler());
                var appUser = _appUserFactory.DefaultBuilder()
                    .WithEmail("admin@sidd.com.br")
                    .WithUserName("admin")
                    .WithFirstName("admin")
                    .WithLastName("admin")
                    .Raise();

                await _userManager.CreateAsync(appUser, "sidd123");
                await _userManager.AddToRoleAsync(appUser, Roles.ROLE_ADMIN);
            }

            var find2 = await _userManager.FindByNameAsync("douglasdotto");

            if (find2 == null)
            {
                var _appUserFactory = new AppUserFactory(new NotificationHandler());
                var appUser = _appUserFactory.DefaultBuilder()
                    .WithEmail("douglasdotto@sidd.com.br")
                    .WithUserName("douglasdotto")
                    .WithFirstName("Douglas")
                    .WithLastName("Dotto")
                    .Raise();

                await _userManager.CreateAsync(appUser, "sidd123");
                await _userManager.AddToRoleAsync(appUser, Roles.ROLE_PATIENT);
            }

            var find3 = await _userManager.FindByNameAsync("rejanefrozza");

            if (find3 == null)
            {
                var _appUserFactory = new AppUserFactory(new NotificationHandler());
                var appUser = _appUserFactory.DefaultBuilder()
                    .WithEmail("rejanfrozza@sidd.com.br")
                    .WithUserName("rejanefrozza")
                    .WithFirstName("Rejane")
                    .WithLastName("Frozza")
                    .Raise();

                await _userManager.CreateAsync(appUser, "sidd123");
                await _userManager.AddToRoleAsync(appUser, Roles.ROLE_PATIENT);
            }

            return true;
        }
    }
}
