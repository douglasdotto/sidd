using AppSidd.Domain.Notifications;
using System;

namespace AppSidd.Domain.Project
{
    public class CDR
    {
        private readonly INotificationHandler _notificationHandler;

        internal CDR() { }
        internal CDR(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }
        public Guid CDRId { get; set; }
        public string UserId { get; set; }
        public decimal Question1 { get; set; }
        public decimal Question2 { get; set; }
        public decimal Question3 { get; set; }
        public decimal Question4 { get; set; }
        public decimal Question5 { get; set; }
        public decimal Question6 { get; set; }
        public decimal Total { get; set; }
        public DateTime Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool IsDeleted { get; set; }

        public bool IsValid => !_notificationHandler.HasNotification();

        public void Specify()
        {
            var specifications = new CDRSpecifications();
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
