using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.App
{
    public class InsertMEEMRequest : IRequest<MEEMDto>
    {
        public MEEMDto MEEM { get; set; }
        public string UserId { get; set; }
        public InsertMEEMRequest(MEEMDto meem, string userId)
        {
            MEEM = meem;
            UserId = userId;
        }
    }
}