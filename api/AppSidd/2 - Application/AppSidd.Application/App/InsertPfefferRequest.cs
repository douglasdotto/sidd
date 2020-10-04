using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.App
{
    public class InsertPfefferRequest : IRequest<PfefferDto>
    {
        public PfefferDto Pfeffer { get; set; }
        public string UserId { get; set; }
        public InsertPfefferRequest(PfefferDto pfeffer, string userId)
        {
            Pfeffer = pfeffer;
            UserId = userId;
        }
    }
}