using static AppSidd.Domain.Users.Auth.AppUserRoleFactory;

namespace AppSidd.Domain.Users.Interfaces.Factory
{
    public interface IAppUserRoleFactory
    {
        AppUserRoleBuilder DefaultBuilder();
    }
}
