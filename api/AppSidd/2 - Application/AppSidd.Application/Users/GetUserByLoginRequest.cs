using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.Users
{
    public class GetUserByLoginRequest : IRequest<UserDto>
    {
        public GetUserByLoginRequest(string key)
        {
            Key = key;
        }

        public string Key { get; }
    }
}
