﻿using AppSidd.Domain.Project;
using AppSidd.Domain.Project.Interfaces.Factory;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class SiddDependencyInjection
    {
        public static IServiceCollection AddFluxoDependency(this IServiceCollection services)
        {
            services.TryAddTransient<IUnityFactory, UnityFactory>();

            return services;
        }
    }
}