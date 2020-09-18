using static AppSidd.Domain.Notifications.NotificationHandler;
using System.Collections.Generic;

namespace AppSidd.Domain.Notifications
{
    public interface INotificationHandler
    {
        NotificationBuilder DefaultBuilder();
        List<NotificationEvent> GetAllNotifications();
        void ClearNotifications();
        bool HasNotification();
    }
}
