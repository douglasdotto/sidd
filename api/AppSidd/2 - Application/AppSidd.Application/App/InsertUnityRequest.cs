using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.App
{
    public class InsertUnityRequest : IRequest<UnityDto>
    {
        public UnityDto Unity { get; set; }
        public string UserId { get; set; }
        public InsertUnityRequest(UnityDto unity, string userId)
        {
            Unity = unity;
            UserId = userId;
        }
    }
}