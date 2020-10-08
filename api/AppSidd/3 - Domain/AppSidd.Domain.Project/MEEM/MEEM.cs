using AppSidd.Domain.Notifications;
using System;

namespace AppSidd.Domain.Project
{
    public class MEEM
    {
        private readonly INotificationHandler _notificationHandler;

        internal MEEM() { }
        internal MEEM(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }
        public Guid MEEMId { get; set; }
        public string UserId { get; set; }
        public int Question1 { get; set; } // 0 a 10
        public int Question2 { get; set; } // 0 a 3
        public int Question3 { get; set; } // 0 a 5
        public int Question4 { get; set; } // 0 a 3
        public int Question5 { get; set; } // 0 a 2
        public int Question6 { get; set; } // 0 a 1
        public int Question7 { get; set; } // 0 a 1
        public int Question8 { get; set; } // 0 a 3
        public int Question9 { get; set; } // 0 a 1
        public int Question10 { get; set; } // 0 a 1
        public int Question11 { get; set; } // 0 a 1
        public int Total { get; set; }
        public int Escolaridade { get; set; } // 0 a 3
        public DateTime Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool IsDeleted { get; set; }

        public bool IsValid => !_notificationHandler.HasNotification();

        public void Specify()
        {
            var specifications = new MEEMSpecifications();
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
