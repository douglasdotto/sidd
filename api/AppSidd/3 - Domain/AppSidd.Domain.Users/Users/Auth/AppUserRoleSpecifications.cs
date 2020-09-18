using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Users.Auth.Specifications
{
    internal class AppUserRoleSpecifications : List<SpecificationBase<AppUserRole>>
    {
        public AppUserRoleSpecifications()
        {
            AddRange(new List<SpecificationBase<AppUserRole>>() {
                new AppUserRoleShouldHaveRoleId(),
                new AppUserRoleShouldHaveUserId()
            });
        }
    }
}