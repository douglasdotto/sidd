using AppSidd.Domain.Notifications;
using AppSidd.Domain.Users.Auth.Specifications;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace AppSidd.Domain.Users.Auth
{
    public class AppUser : IdentityUser
    {
        private readonly INotificationHandler _notificationHandler;
        internal AppUser() { }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Sexo { get; set; }
        public string CPF { get; set; }
        public string RG { get; set; }
        public string SUS { get; set; }
        public string COREN { get; set; }
        public Guid? UnityId { get; set; }
        public bool IsActive { get; set; }
        public virtual ICollection<AppUserRole> AppUserRoles { get; set; }

        internal AppUser(INotificationHandler notificationHandler) 
            => _notificationHandler = notificationHandler;

        public bool IsValid => !_notificationHandler.HasNotification();

        public void Specify()
        {
             var specifications = new AppUserSpecifications();
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