using AppSidd.Application.Dto;
using AppSidd.Dto.ResponsePatterns;
using MediatR;
using System.Collections.Generic;

namespace AppSidd.Application.Users
{
    public class GetSintomasRequest : IRequest<List<SintomasDto>>
    {
        public UserDto User { get; set; }
        public GetSintomasRequest(UserDto user)
        {
            User = user;
        }
    }
}