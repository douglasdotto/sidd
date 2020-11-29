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
            return View();
        }

        public async Task<IActionResult> Index()
        {
            var token = await _mediator.Send(new GetAllPatientRequest(CurrentUser));
            var dash = await _mediator.Send(new GetInfoDashRequest(CurrentUser));

            decimal total = dash.Pfeffer + dash.CDR + dash.MEEM + dash.MoCA + dash.TesteSintomas;
            ViewBag.Patients = token.Data;
            ViewBag.Pffefer = dash.Pfeffer.ToString();
            try
            {
                ViewBag.PffeferPerc = Decimal.Round(Convert.ToDecimal((dash.Pfeffer * 100)) / total, 2).ToString().Replace(",", ".");
            }
            catch
            {
                ViewBag.PffeferPerc = 0;
            }
            ViewBag.MEEM = dash.MEEM.ToString();
            try
            {
                ViewBag.MEEMPerc = Decimal.Round(Convert.ToDecimal((dash.MEEM * 100)) / total, 2).ToString().Replace(",", ".");
            }
            catch
            {
                ViewBag.PffeferPerc = 0;
            }
            ViewBag.MoCA = dash.MoCA.ToString();
            try
            {
                ViewBag.MoCAPerc = Decimal.Round(Convert.ToDecimal((dash.MoCA * 100)) / total, 2).ToString().Replace(",", ".");
            }
            catch
            {
                ViewBag.MoCAPerc = 0;
            }
            ViewBag.CDR = dash.CDR.ToString();
            try
            {
                ViewBag.CDRPerc = Decimal.Round(Convert.ToDecimal((dash.CDR * 100)) / total, 2).ToString().Replace(",", ".");
            }
            catch
            {
                ViewBag.CDRPerc = 0;
            }
            ViewBag.TesteSintoma = dash.TesteSintomas.ToString();
            try
            {
                ViewBag.TesteSintomaPerc = Decimal.Round(Convert.ToDecimal((dash.TesteSintomas * 100)) / total, 2).ToString().Replace(",", ".");
            }
            catch
            {
                ViewBag.TesteSintomaPerc = 0;
            }

            return View();
        }

        [Route("/View/{patientId}")]
        public async Task<IActionResult> View(string patientId)
        {
            var dados = await _mediator.Send(new GetViewDashByPatientRequest(CurrentUser, patientId));
            ViewBag.Nome = dados.FirstName + " " + dados.LastName;
            ViewBag.Idade = ((DateTime.UtcNow - dados.IdadeData.Value).TotalDays / 365).ToString("N0");
            ViewBag.Sexo = dados.Sexo;
            ViewBag.EstadoCivil = dados.EstadoCivil;
            ViewBag.PossuiCuidador = dados.PossuiCuidador.Value ? "Sim" : "Não";
            ViewBag.Raca = dados.Raca;
            ViewBag.ResideCom = dados.ResideCom;
            ViewBag.TempoDeEstudo = dados.TempoDeEstudo;

            ViewBag.TotalTests = dados.TotalTests;
            ViewBag.Tests = dados.Tests;
            ViewBag.Acolhimento = dados.Acolhimento;
            ViewBag.Diagnostico = dados.Diagnostico;

            return View();
        }
    }
}
