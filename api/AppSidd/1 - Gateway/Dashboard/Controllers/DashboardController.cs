using AppSidd.Application.Users;
using AppSidd.Domain.Users.Auth.JWT;
using Dashboard.Controllers.Base;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
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

            decimal total = dash.Pfeffer + dash.CDR + dash.MEEM + dash.MoCA + dash.TesteSintomas + dash.GDS;
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
            ViewBag.GDS = dash.GDS.ToString();
            try
            {
                ViewBag.GDSPerc = Decimal.Round(Convert.ToDecimal((dash.GDS * 100)) / total, 2).ToString().Replace(",", ".");
            }
            catch
            {
                ViewBag.GDSPerc = 0;
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

            var lastPfeffer = dados.Tests.FindAll(x => x.Type == "Pfeffer").OrderByDescending(x => x.Date).FirstOrDefault();
            if (lastPfeffer != null)
                ViewBag.PfefferLast = "<span class='" + (lastPfeffer.Color == "G" ? "text-info" : lastPfeffer.Color == "Y" ? "text-primary" : "text-warning") + "'>" + lastPfeffer.Classification + "</span>";
            else
                ViewBag.PfefferLast = "Teste não aplicado";

            var cdrLast = dados.Tests.FindAll(x => x.Type == "CDR").OrderByDescending(x => x.Date).FirstOrDefault();
            if (cdrLast != null)
                ViewBag.CDRLast = "<span class='" + (cdrLast.Color == "G" ? "text-info" : cdrLast.Color == "Y" ? "text-primary" : "text-warning") + "'>" + cdrLast.Classification + "</span>";
            else
                ViewBag.CDRLast = "Teste não aplicado";

            var meemlast = dados.Tests.FindAll(x => x.Type == "Mini-Mental (MEEM)").OrderByDescending(x => x.Date).FirstOrDefault();
            if (meemlast != null)
                ViewBag.MEEMLast = "<span class='" + (meemlast.Color == "G" ? "text-info" : meemlast.Color == "Y" ? "text-primary" : "text-warning") + "'>" + meemlast.Classification + "</span>";
            else
                ViewBag.MEEMLast = "Teste não aplicado";

            var gdslast = dados.Tests.FindAll(x => x.Type == "GDS").OrderByDescending(x => x.Date).FirstOrDefault();
            if (gdslast != null)
                ViewBag.GDSlast = "<span class='" + (gdslast.Color == "G" ? "text-info" : gdslast.Color == "Y" ? "text-primary" : "text-warning") + "'>" + gdslast.Classification + "</span>";
            else
                ViewBag.GDSlast = "Teste não aplicado";

            var mocalst = dados.Tests.FindAll(x => x.Type == "MoCA").OrderByDescending(x => x.Date).FirstOrDefault();
            if (mocalst != null)
                ViewBag.MoCALast = "<span class='" + (mocalst.Color == "G" ? "text-info" : mocalst.Color == "Y" ? "text-primary" : "text-warning") + "'>" + mocalst.Classification + "</span>";
            else
                ViewBag.MoCALast = "Teste não aplicado";

            ViewBag.TotalTests = dados.TotalTests;
            ViewBag.Tests = dados.Tests;
            ViewBag.Acolhimento = dados.Acolhimento;
            ViewBag.Diagnostico = dados.Diagnostico;

            return View();
        }
    }
}
