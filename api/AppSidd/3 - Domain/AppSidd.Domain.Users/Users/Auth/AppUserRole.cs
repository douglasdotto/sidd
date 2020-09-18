using AppSidd.Domain.Users.Auth.Specifications;
using Microsoft.AspNetCore.Identity;
using AppSidd.Domain.Notifications;
using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Domain.Users.Auth
{
    public class AppUserRole : IdentityUserRole<string> 
    {
        private readonly INotificationHandler _notificationHandler;

        internal AppUserRole() { }

        public virtual AppUser AppUser { get; set; }
        public virtual AppRole AppRole{ get; set; }

        internal AppUserRole(INotificationHandler notificationHandler)
           => _notificationHandler = notificationHandler;

        public bool IsValid => !_notificationHandler.HasNotification();

        public void Specify()
        {
            var specifications = new AppUserRoleSpecifications();
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
