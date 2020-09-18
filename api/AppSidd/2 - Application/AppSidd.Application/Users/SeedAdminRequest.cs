using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.Users
{
    public class SeedAdminRequest : IRequest<bool>
    {
        public SeedAdminRequest()
        {
        }
    }
}