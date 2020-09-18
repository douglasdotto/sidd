using AppSidd.Application.Dto;
using AppSidd.Dto.ResponsePatterns;
using MediatR;
using System.Collections.Generic;

namespace AppSidd.Application.Users
{
    public class GetAllUsersRequest : IRequest<ResponseAllDto<List<UserDto>>>
    {
        public UserDto User { get; set; }
        public GetAllUsersRequest(UserDto user)
        {
            User = user;
        }
    }
}