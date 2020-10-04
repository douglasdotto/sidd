using AppSidd.Application.App;
using AppSidd.Application.Dto;
using AppSidd.Application.Users;
using AppSidd.Domain.Users.Auth.JWT;
using AppSidd.Dto.Response;
using Dashboard.Controllers.Base;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace Dashboard.Controllers
{
    [ApiController]
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
        [Route("loginapp")]
        public async Task<IActionResult> LoginApp([FromBody] UserSignInDto request)
        {
            var token = await _mediator.Send(new SigninRequest(request));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [Route("getPatients")]
        public async Task<IActionResult> GetPatients()
        {
            var token = await _mediator.Send(new GetAllPatientRequest(CurrentUser));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [Route("insertUnity")]
        public async Task<IActionResult> InsertUnity([FromBody] UnityDto unity, string userId)
        {
            var token = await _mediator.Send(new InsertUnityRequest(unity, userId));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }

        [HttpPost]
        [Route("insertPfeffer")]
        public async Task<IActionResult> InsertPfeffer([FromBody] PfefferDto pfeffer, string userId)
        {
            var token = await _mediator.Send(new InsertPfefferRequest(pfeffer, userId));

            if (_notification.HasNotification())
                return BadRequest(new BadRequestDto(_notification));

            return Ok(new OkDto(token));
        }
    }
}
