using AppSidd.Application.Dto;
using AppSidd.Dto.ResponsePatterns;
using MediatR;
using System.Collections.Generic;

namespace AppSidd.Application.Users
{
    public class GetInfoDashRequest : IRequest<DashDto>
    {
        public UserDto User { get; set; }
        public GetInfoDashRequest(UserDto user)
        {
            User = user;
        }
    }
}