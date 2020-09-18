using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class MapperDependencyInjection
    {
        public static IServiceCollection AddAutoMapperDependency(this IServiceCollection services)
        {
            return services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        }
    }
}
