using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Users.Auth.Specifications
{
    internal class AppUserSpecifications : List<SpecificationBase<AppUser>>
    {
        public AppUserSpecifications()
        {
            AddRange(new List<SpecificationBase<AppUser>>() {
                new AppUserShouldHaveUserName(),
                new AppUserShouldHaveEmail()
            });
        }
    }
}