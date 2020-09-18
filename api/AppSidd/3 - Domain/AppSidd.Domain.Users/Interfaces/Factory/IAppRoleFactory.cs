using static AppSidd.Domain.Users.Auth.AppRoleFactory;

namespace AppSidd.Domain.Users.Interfaces.Factory
{
    public interface IAppRoleFactory
    {
        AppRoleBuilder DefaultBuilder();
    }
}
