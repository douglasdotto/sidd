using AppSidd.Application.Dto;
using MediatR;

namespace AppSidd.Application.Users
{
    public class UpdateUserRequest : IRequest<UserDto>
    {
        public UserDto User { get; set; }
        public string Role { get; set; }
        public string TransporterId { get; set; }
        public string UnityId { get; set; }
        public string GtId { get; set; }
        public UpdateUserRequest(UserDto user, string role, string transporterId, string unityId, string gtId)
        {
            User = user;
            Role = role;
            TransporterId = transporterId;
            UnityId = unityId;
            GtId = gtId;
        }
    }
}
