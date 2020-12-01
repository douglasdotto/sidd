using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.App
{
    public class InsertGDSRequest : IRequest<GDSDto>
    {
        public GDSDto GDS { get; set; }
        public string UserId { get; set; }
        public InsertGDSRequest(GDSDto gds, string userId)
        {
            GDS = gds;
            UserId = userId;
        }
    }
}