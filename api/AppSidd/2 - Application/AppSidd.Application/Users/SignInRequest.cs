using AppSidd.Application.Dto.Response;
using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.Users
{
    public class SigninRequest : IRequest<TokenResultDto>
    {
        public UserSignInDto Request { get; }
        public SigninRequest(UserSignInDto request)
        {
            Request = request;
        }
    }
}
