using AppSidd.Domain.Users.Auth.JWT;
using Dashboard.Controllers.Base;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace Dashboard.Controllers
{
    [Authorize(Policy = Polices.POLICE_PROGRAM)]
    public class DashboardController : BaseController
    {
        private readonly INotification _notification;
        private readonly IMediator _mediator;

        public DashboardController(IMediator mediator, INotification notification)
            : base(mediator)
        {
            _notification = notification;
            _mediator = mediator;
        }
        public IActionResult Error()
        {
            ViewBag.Menu = "Dashboard";
            return View();
        }
        public IActionResult Index()
        {
            ViewBag.Menu = "Dashboard";
            return View();
        }
    }
}
