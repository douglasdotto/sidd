using MediatR;
using System;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class RepositoryDependencyInjection
    {
        public static IServiceCollection AddApplicationDependency(this IServiceCollection services)
        {
            services.AddMediatR(AppDomain.CurrentDomain.GetAssemblies());

            return services;
        }
    }
}