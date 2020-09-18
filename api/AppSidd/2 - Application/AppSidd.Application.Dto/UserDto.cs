using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Application.Dto
{
    public class UserDto
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<RoleDto> Roles { get; set; }
        public DateTime Created { get; set; }
        public DateTime? LastLogin { get; set; }
        public Guid? UnityId { get; set; }
        public bool IsActive { get; set; }
    }
}
