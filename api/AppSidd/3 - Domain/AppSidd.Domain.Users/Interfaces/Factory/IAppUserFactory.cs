using static AppSidd.Domain.Users.Auth.AppUserFactory;

namespace AppSidd.Domain.Users.Interfaces.Factory
{
    public interface IAppUserFactory
    {
        AppUserBuilder DefaultBuilder();
    }
}
