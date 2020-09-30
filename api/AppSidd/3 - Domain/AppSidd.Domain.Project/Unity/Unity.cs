using AppSidd.Domain.Notifications;
using System;

namespace AppSidd.Domain.Project
{
    public class Unity
    {
        private readonly INotificationHandler _notificationHandler;

        internal Unity() { }
        internal Unity(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }
        public Guid UnityId { get; set; }
        public string UnityName { get; set; }
        public DateTime Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool IsDeleted { get; set; }

        public bool IsValid => !_notificationHandler.HasNotification();

        public void Specify()
        {
            var specifications = new UnitySpecifications();
            foreach (var specification in specifications)
            {
                var validation = specification.Condition();
                if (!validation(this))
                    _notificationHandler
                        .DefaultBuilder()
                        .WithCode(specification.Code)
                        .WithMessage(specification.Message)
                        .WithDetailMessage(specification.DetailMessage)
                        .RaiseNotification();
            }
        }
    }
}
