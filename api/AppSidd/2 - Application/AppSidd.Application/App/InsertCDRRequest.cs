using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.App
{
    public class InsertCDRRequest : IRequest<CDRDto>
    {
        public CDRDto CDR { get; set; }
        public string UserId { get; set; }
        public InsertCDRRequest(CDRDto cdr, string userId)
        {
            CDR = cdr;
            UserId = userId;
        }
    }
}