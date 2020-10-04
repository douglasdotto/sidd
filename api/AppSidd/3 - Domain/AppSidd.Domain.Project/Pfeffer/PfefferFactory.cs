
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Project.Interfaces.Factory;
using System;

namespace AppSidd.Domain.Project
{
    public class PfefferFactory : IPfefferFactory
    {
        private readonly INotificationHandler _notificationHandler;

        public PfefferFactory(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }

        public PfefferBuilder DefaultBuilder()
            => new PfefferBuilder(_notificationHandler);

        public class PfefferBuilder
        {
            private readonly Pfeffer _Pfeffer;
            private readonly INotificationHandler _notificationHandler;

            public PfefferBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _Pfeffer = new Pfeffer(notificationHandler);
            }

            public PfefferBuilder WithPfefferId(Guid value)
            {
                _Pfeffer.PfefferId = value;
                return this;
            }

            public PfefferBuilder WithUserId(string value)
            {
                _Pfeffer.UserId = value;
                return this;
            }

            public PfefferBuilder WithQuestion1(int value)
            {
                _Pfeffer.Question1 = value;
                return this;
            }

            public PfefferBuilder WithQuestion2(int value)
            {
                _Pfeffer.Question2 = value;
                return this;
            }

            public PfefferBuilder WithQuestion3(int value)
            {
                _Pfeffer.Question3 = value;
                return this;
            }

            public PfefferBuilder WithQuestion4(int value)
            {
                _Pfeffer.Question4 = value;
                return this;
            }

            public PfefferBuilder WithQuestion5(int value)
            {
                _Pfeffer.Question5 = value;
                return this;
            }

            public PfefferBuilder WithQuestion6(int value)
            {
                _Pfeffer.Question6 = value;
                return this;
            }

            public PfefferBuilder WithQuestion7(int value)
            {
                _Pfeffer.Question7 = value;
                return this;
            }

            public PfefferBuilder WithQuestion8(int value)
            {
                _Pfeffer.Question8 = value;
                return this;
            }

            public PfefferBuilder WithQuestion9(int value)
            {
                _Pfeffer.Question9 = value;
                return this;
            }

            public PfefferBuilder WithQuestion10(int value)
            {
                _Pfeffer.Question10 = value;
                return this;
            }

            public PfefferBuilder WithTotal(int value)
            {
                _Pfeffer.Total = value;
                return this;
            }

            public PfefferBuilder WithCreated(DateTime value)
            {
                _Pfeffer.Created = value;
                return this;
            }

            public PfefferBuilder WithCreatedBy(string value)
            {
                _Pfeffer.CreatedBy = value;
                return this;
            }

            public PfefferBuilder WithUpdated(DateTime value)
            {
                _Pfeffer.Updated = value;
                return this;
            }

            public PfefferBuilder WithUpdatedBy(string value)
            {
                _Pfeffer.UpdatedBy = value;
                return this;
            }

            public PfefferBuilder WithIsDeleted(bool value)
            {
                _Pfeffer.IsDeleted = value;
                return this;
            }

            public Pfeffer Raise()
            {
                _Pfeffer.Specify();
                if (_notificationHandler.HasNotification())
                    return new Pfeffer(_notificationHandler);

                return _Pfeffer;
            }
        }
    }
}