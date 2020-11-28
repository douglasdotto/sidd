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
        public int Idade { get; set; }
        public DateTime? IdadeData { get; set; }
        public int TempoDeEstudo { get; set; }
        public string EstadoCivil { get; set; }
        public string Trabalho { get; set; }
        public string Raca { get; set; }
        public string ResideCom { get; set; }
        public bool PossuiCuidador { get; set; }
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