using AppSidd.Application.App;
using AppSidd.Application.Dto;
using AppSidd.Application.Users;
using AppSidd.Domain.Users.Auth.JWT;
using AppSidd.Dto.Response;
using Dashboard.Controllers.Base;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace Dashboard.Controllers
{
    public class AppController : BaseController
    {
        private readonly INotification _notification;
        private readonly IMediator _mediator;

        public AppController(IMediator mediator, INotification notification)
            : base(mediator)
        {
            _notification = notification;
            _mediator = mediator;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("loginapp")]
        public async Task<IActionResult> LoginApp([FromBody] UserSignInDto request)
        {
            var token = await _mediator.Send(new SigninRequest(request));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("insertPatient")]
        public async Task<IActionResult> InsertPatient([FromBody] NewPatientDto patient)
        {
            var token = await _mediator.Send(new InsertPatientRequest(patient));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("getPatients")]
        public async Task<IActionResult> GetPatients()
        {
            var token = await _mediator.Send(new GetAllPatientRequest(CurrentUser));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("insertUnity")]
        public async Task<IActionResult> InsertUnity([FromBody] UnityDto unity)
        {
            var token = await _mediator.Send(new InsertUnityRequest(unity, CurrentUser.Id));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("insertPfeffer")]
        public async Task<IActionResult> InsertPfeffer([FromBody] PfefferDto pfeffer)
        {
            var token = await _mediator.Send(new InsertPfefferRequest(pfeffer, pfeffer.CreatedBy));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("insertCDR")]
        public async Task<IActionResult> InsertCDR([FromBody] CDRDto cdr)
        {
            var token = await _mediator.Send(new InsertCDRRequest(cdr, cdr.CreatedBy));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("insertMoCA")]
        public async Task<IActionResult> InsertMoCA([FromBody] MoCADto moca)
        {
            var token = await _mediator.Send(new InsertMoCARequest(moca, moca.CreatedBy));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("insertMEEM")]
        public async Task<IActionResult> InsertMEEM([FromBody] MEEMDto meem)
        {
            var token = await _mediator.Send(new InsertMEEMRequest(meem, meem.CreatedBy));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("insertAcolhimento")]
        public async Task<IActionResult> InsertAcolhimento([FromBody] AcolhimentoDto acolhimento)
        {
            var token = await _mediator.Send(new InsertAcolhimentoRequest(acolhimento, acolhimento.CreatedBy));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("getSintomas")]
        public async Task<IActionResult> GetSintomas()
        {
            var token = await _mediator.Send(new GetSintomasRequest(CurrentUser));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("insertTesteSintoma")]
        public async Task<IActionResult> InsertTesteSintoma([FromBody] List<InsertSintomaDto> lista)
        {
            var token = await _mediator.Send(new InsertTesteSintomaRequest(lista));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }
    }
}
