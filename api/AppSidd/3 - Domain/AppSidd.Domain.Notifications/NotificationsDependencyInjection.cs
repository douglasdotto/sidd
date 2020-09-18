using Microsoft.Extensions.DependencyInjection.Extensions;
using AppSidd.Domain.Notifications;
using Microsoft.Extensions.DependencyInjection;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class NotificationsDependencyInjection
    {
        public static IServiceCollection AddNotificationsDependency(this IServiceCollection services)
        {
            services.TryAddScoped<INotificationHandler, NotificationHandler>();
            return services;
        }
    }
}
