using AppSidd.Application.Dto;
using AppSidd.Dto.ResponsePatterns;
using MediatR;
using System.Collections.Generic;

namespace AppSidd.Application.Users
{
    public class GetViewDashByPatientRequest : IRequest<UserDto>
    {
        public UserDto User { get; set; }
        public string PatientId { get; set; }
        public GetViewDashByPatientRequest(UserDto user, string patientId)
        {
            User = user;
            PatientId = patientId;
        }
    }
}