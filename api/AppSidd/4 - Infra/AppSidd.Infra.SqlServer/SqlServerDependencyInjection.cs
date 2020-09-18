using Microsoft.Extensions.DependencyInjection.Extensions;
using AppSidd.Infra.SqlServer.Interfaces;
using AppSidd.Infra.SqlServer;
using AppSidd.Infra.SqlServer.Context;
using Microsoft.EntityFrameworkCore.Design;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class SqlServerDependencyInjection
    {
        public static IServiceCollection AddSqlServerDependency(this IServiceCollection services)
        {
            services.TryAddScoped<IDbContext>(provider =>
                provider.GetService<AppSiddServerContext>());

            return services;
        }
    }
}