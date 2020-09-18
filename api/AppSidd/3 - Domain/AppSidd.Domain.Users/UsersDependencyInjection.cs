using Microsoft.Extensions.DependencyInjection.Extensions;
using AppSidd.Domain.Users;
using AppSidd.Domain.Users.Interfaces.Factory;
using AppSidd.Domain.Users.Auth;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class UsersDependencyInjection
    {
        public static IServiceCollection AddUsersDependency(this IServiceCollection services)
        {
            services.TryAddTransient<IAppUserFactory, AppUserFactory>();
            services.TryAddTransient<IAppRoleFactory, AppRoleFactory>();

            return services;
        }
    }
}
