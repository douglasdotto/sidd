﻿using AppSidd.Domain.Notifications;
using System;

namespace AppSidd.Domain.Project
{
    public class MoCA
    {
        private readonly INotificationHandler _notificationHandler;

        internal MoCA() { }
        internal MoCA(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }
        public Guid MoCAId { get; set; }
        public string UserId { get; set; }
        public int Question1 { get; set; }
        public int Question2 { get; set; }
        public int Question3 { get; set; }
        public int Question4 { get; set; }
        public int Question5 { get; set; }
        public int Question6 { get; set; }
        public int Question7 { get; set; }
        public int Question8 { get; set; }
        public int Question9 { get; set; }
        public int Question10 { get; set; }
        public int Total { get; set; }
        public DateTime Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool IsDeleted { get; set; }

        public bool IsValid => !_notificationHandler.HasNotification();

        public void Specify()
        {
            var specifications = new MoCASpecifications();
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
