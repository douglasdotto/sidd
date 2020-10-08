using AppSidd.Application.Dto.Response;
using AppSidd.Application.Dto;
using MediatR;
using Microsoft.AspNetCore.Http;
using AppSidd.Application.Dto.Response;
using AppSidd.Application.Dto;

namespace AppSidd.Application.Users
{
    public class SigninAppRequest : IRequest<TokenResultDto>
    {
        public UserSignInDto Request { get; }
        public HttpContext HttpContext { get; }
        public SigninAppRequest(UserSignInDto request, HttpContext httpContext)
        {
            Request = request;
            HttpContext = httpContext;
        }
    }
}
