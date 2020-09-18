using Microsoft.Extensions.DependencyInjection.Extensions;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Infra.Repositories.Repositories;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class RepositoryDependencyInjection
    {
        public static IServiceCollection AddRepositoriesDependency(this IServiceCollection services)
        {
            services.TryAddScoped(typeof(IUnitOfWork), typeof(UnitOfWork));

            return services;
        }
    }
}
