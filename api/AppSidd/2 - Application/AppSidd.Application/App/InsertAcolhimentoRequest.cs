using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.App
{
    public class InsertAcolhimentoRequest : IRequest<AcolhimentoDto>
    {
        public AcolhimentoDto Acolhimento { get; set; }
        public string UserId { get; set; }
        public InsertAcolhimentoRequest(AcolhimentoDto acolhimento, string userId)
        {
            Acolhimento = acolhimento;
            UserId = userId;
        }
    }
}