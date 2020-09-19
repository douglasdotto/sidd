using AppSidd.Application.Dto;
using AppSidd.Application.Users;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Dashboard.Controllers.Base
{
    public class BaseController : Controller
    {
        private readonly IMediator _mediator;
        private UserDto _currentUser;

        /// <summary>
        /// Construtor de controller base
        /// </summary>
        public BaseController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// Usuário Logado
        /// </summary>
        public UserDto CurrentUser => GetCurrentUser();

        private UserDto GetCurrentUser()
        {
            if (!User.Identity.IsAuthenticated)
                return null;

            if (_currentUser != null)
                return _currentUser;

            var userByIdentity = _mediator.Send(new GetUserByLoginRequest(User.Identity.Name));
            userByIdentity.Wait();
            _currentUser = userByIdentity.Result;

            return _currentUser;
        }
    }
}
