using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Users.Auth.Specifications
{
    internal class AppRoleSpecifications : List<SpecificationBase<AppRole>>
    {
        public AppRoleSpecifications()
        {
            AddRange(new List<SpecificationBase<AppRole>>() {
                new AppRoleShouldHaveName()
            });
        }
    }
}