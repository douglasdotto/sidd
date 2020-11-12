using AppSidd.Application.Dto;
using MediatR;
using System.Collections.Generic;

namespace AppSidd.Application.App
{
    public class InsertTesteSintomaRequest : IRequest<List<TesteSintomaDto>>
    {
        public List<TesteSintomaDto> TesteSintoma { get; set; }
        public string UserId { get; set; }
        public InsertTesteSintomaRequest(List<TesteSintomaDto> testeSintoma, string userId)
        {
            TesteSintoma = testeSintoma;
            UserId = userId;
        }
    }
}