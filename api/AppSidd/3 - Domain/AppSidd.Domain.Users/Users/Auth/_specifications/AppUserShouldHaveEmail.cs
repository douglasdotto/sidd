using AppSidd.Domain.Specifications;
using System;

namespace AppSidd.Domain.Users.Auth.Specifications
{
    internal class AppUserShouldHaveEmail : SpecificationBase<AppUser>
    {
        public override string Message => "E-mail do usuário é obrigatório.";
        public override string Code => AppUserNotificationCodes.AppUser_01.ToString();
        public override string DetailMessage => "";

        public override Func<AppUser, bool> Condition() =>
            user => !string.IsNullOrEmpty(user.Email);
    }
}