using AppSidd.Application.Dto;
using MediatR;
using System.Collections.Generic;

namespace AppSidd.Application.App
{
    public class InsertTesteSintomaRequest : IRequest<List<TesteSintomaDto>>
    {
        public List<InsertSintomaDto> TesteSintoma { get; set; }
        public InsertTesteSintomaRequest(List<InsertSintomaDto> testeSintoma)
        {
            TesteSintoma = testeSintoma;
        }
    }
}