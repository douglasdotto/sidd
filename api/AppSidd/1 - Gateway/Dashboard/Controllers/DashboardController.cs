using AppSidd.Application.Users;
using AppSidd.Domain.Users.Auth.JWT;
using Dashboard.Controllers.Base;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
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

        public async Task<IActionResult> Index()
        {
            var token = await _mediator.Send(new GetAllPatientRequest(CurrentUser));
            var dash = await _mediator.Send(new GetInfoDashRequest(CurrentUser));

            decimal total = dash.Pfeffer + dash.CDR + dash.MEEM + dash.MoCA;

            ViewBag.Patients = token.Data;
            ViewBag.Pffefer = dash.Pfeffer.ToString();
            ViewBag.PffeferPerc = Decimal.Round(Convert.ToDecimal((dash.Pfeffer * 100)) / total, 2).ToString().Replace(",", ".");
            ViewBag.MEEM = dash.MEEM.ToString();
            ViewBag.MEEMPerc = Decimal.Round(Convert.ToDecimal((dash.MEEM * 100)) / total, 2).ToString().Replace(",", ".");
            ViewBag.MoCA = dash.MoCA.ToString();
            ViewBag.MoCAPerc = Decimal.Round(Convert.ToDecimal((dash.MoCA * 100)) / total, 2).ToString().Replace(",", ".");
            ViewBag.CDR = dash.CDR.ToString();
            ViewBag.CDRPerc = Decimal.Round(Convert.ToDecimal((dash.CDR * 100)) / total, 2).ToString().Replace(",", ".");
            ViewBag.Menu = "Dashboard";
            return View();
        }
    }
}
