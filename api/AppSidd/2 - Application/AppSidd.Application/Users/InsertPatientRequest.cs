using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.Users
{
    public class InsertPatientRequest : IRequest<UserDto>
    {
        public NewPatientDto User { get; set; }
        public InsertPatientRequest(NewPatientDto user)
        {
            User = user;
        }
    }
}