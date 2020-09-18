using AppSidd.Domain.Notifications;
using System.Collections.Generic;

namespace AppSidd.Dto.Response
{
    public class BadRequestDto
    {
        public BadRequestDto(INotificationHandler notificationHandler) => Notifications = notificationHandler.GetAllNotifications();
        public BadRequestDto(INotificationHandler notificationHandler, object request)
        {
            ObjectRequest = request;
            Notifications = notificationHandler.GetAllNotifications();
        }
        public object ObjectRequest { get; set; }
        public List<NotificationEvent> Notifications { get; set; }
    }
}
