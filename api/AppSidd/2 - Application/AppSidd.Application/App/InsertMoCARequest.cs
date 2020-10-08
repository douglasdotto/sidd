using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.App
{
    public class InsertMoCARequest : IRequest<MoCADto>
    {
        public MoCADto MoCA { get; set; }
        public string UserId { get; set; }
        public InsertMoCARequest(MoCADto moca, string userId)
        {
            MoCA = moca;
            UserId = userId;
        }
    }
}