using AppSidd.Application.Dto;
using AppSidd.Dto.ResponsePatterns;
using MediatR;
using System.Collections.Generic;

namespace AppSidd.Application.Users
{
    public class GetAllPatientRequest : IRequest<ResponseAllDto<List<UserDto>>>
    {
        public UserDto User { get; set; }
        public GetAllPatientRequest(UserDto user)
        {
            User = user;
        }
    }
}