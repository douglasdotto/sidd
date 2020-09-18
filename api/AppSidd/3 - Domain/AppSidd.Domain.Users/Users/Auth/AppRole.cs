using AppSidd.Domain.Notifications;
using AppSidd.Domain.Users.Auth.Specifications;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace AppSidd.Domain.Users.Auth
{
    public class AppRole : IdentityRole
    {
        private readonly INotificationHandler _notificationHandler;
        internal AppRole() { }

        public virtual ICollection<AppUserRole> AppUserRoles { get; set; }

        internal AppRole(INotificationHandler notificationHandler)
            => _notificationHandler = notificationHandler;

        public bool IsValid => !_notificationHandler.HasNotification();

        public void Specify()
        {
            var specifications = new AppRoleSpecifications();
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