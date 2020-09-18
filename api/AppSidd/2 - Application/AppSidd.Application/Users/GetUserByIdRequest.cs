using AppSidd.Application.Dto;
using MediatR;
using System;

namespace AppSidd.Application.Users
{
    public class GetUserByIdRequest : IRequest<UserDto>
    {

        public GetUserByIdRequest(Guid key) => Key = key;

        public Guid Key { get; }
    }
}
