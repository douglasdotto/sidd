using AppSidd.Domain.Specifications;
using System;

namespace AppSidd.Domain.Users.Auth.Specifications
{
    internal class AppRoleShouldHaveName : SpecificationBase<AppRole>
    {
        public override string Message => "Nome da role é obrigatória.";
        public override string Code => AppRoleNotificationCodes.AppRole_01.ToString();
        public override string DetailMessage => "";

        public override Func<AppRole, bool> Condition() =>
            role => !string.IsNullOrEmpty(role.Name);
    }
}