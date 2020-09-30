using AppSidd.Application.Dto;
using AppSidd.Application.Users;
using Dashboard.Controllers.Base;
using MediatR;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace Dashboard.Controllers
{
    public class SignInController : BaseController
    {
        private readonly INotification _notification;
        private readonly IMediator _mediator;

        public SignInController(IMediator mediator, INotification notification)
            : base(mediator)
        {
            _notification = notification;
            _mediator = mediator;
        }

        [AllowAnonymous]
        public async Task<ActionResult> Index(string message)
        {
            await _mediator.Send(new SeedAdminRequest());
            ViewBag.Message = message;

            var model = new UserSignInDto();

            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> Index(UserSignInDto request)
        {
            var token = await _mediator.Send(new SigninRequest(request));

            if (_notification.HasNotification())
            {
                ViewBag.Notifications = _notification.GetAllNotifications();
                return View(request);
            }

            if (token.Identity == null)
            {
                _notification.DefaultBuilder()
                               .WithCode("SignInController_01")
                               .WithMessage("Ocorreu um erro ao acessar sua conta. Tente novamente mais tarde.")
                               .RaiseNotification();

                ViewBag.Notifications = _notification.GetAllNotifications();
                return View(request);
            }

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(token.Identity));
            return RedirectToAction("Index", "Dashboard");
        }

        [Route("/logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return View("Index");
        }

        [Route("/populate")]
        public async Task<IActionResult> Populate()
        {
            var token = await _mediator.Send(new SeedAdminRequest());
            return View("Index");
        }
    }
}
