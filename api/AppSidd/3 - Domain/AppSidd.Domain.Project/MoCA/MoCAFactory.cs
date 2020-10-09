
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Project.Interfaces.Factory;
using System;

namespace AppSidd.Domain.Project
{
    public class MoCAFactory : IMoCAFactory
    {
        private readonly INotificationHandler _notificationHandler;

        public MoCAFactory(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }

        public MoCABuilder DefaultBuilder()
            => new MoCABuilder(_notificationHandler);

        public class MoCABuilder
        {
            private readonly MoCA _MoCA;
            private readonly INotificationHandler _notificationHandler;

            public MoCABuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _MoCA = new MoCA(notificationHandler);
            }

            public MoCABuilder WithMoCAId(Guid value)
            {
                _MoCA.MoCAId = value;
                return this;
            }

            public MoCABuilder WithUserId(string value)
            {
                _MoCA.UserId = value;
                return this;
            }

            public MoCABuilder WithQuestion1(int value)
            {
                _MoCA.Question1 = value;
                return this;
            }

            public MoCABuilder WithQuestion2(int value)
            {
                _MoCA.Question2 = value;
                return this;
            }

            public MoCABuilder WithQuestion3(int value)
            {
                _MoCA.Question3 = value;
                return this;
            }

            public MoCABuilder WithQuestion4(int value)
            {
                _MoCA.Question4 = value;
                return this;
            }

            public MoCABuilder WithQuestion5(int value)
            {
                _MoCA.Question5 = value;
                return this;
            }

            public MoCABuilder WithQuestion6(int value)
            {
                _MoCA.Question6 = value;
                return this;
            }

            public MoCABuilder WithQuestion7(int value)
            {
                _MoCA.Question7 = value;
                return this;
            }

            public MoCABuilder WithQuestion8(int value)
            {
                _MoCA.Question8 = value;
                return this;
            }

            public MoCABuilder WithQuestion9(int value)
            {
                _MoCA.Question9 = value;
                return this;
            }

            public MoCABuilder WithQuestion10(int value)
            {
                _MoCA.Question10 = value;
                return this;
            }

            public MoCABuilder WithTotal(int value)
            {
                _MoCA.Total = value;
                return this;
            }

            public MoCABuilder WithCreated(DateTime value)
            {
                _MoCA.Created = value;
                return this;
            }

            public MoCABuilder WithCreatedBy(string value)
            {
                _MoCA.CreatedBy = value;
                return this;
            }

            public MoCABuilder WithUpdated(DateTime value)
            {
                _MoCA.Updated = value;
                return this;
            }

            public MoCABuilder WithUpdatedBy(string value)
            {
                _MoCA.UpdatedBy = value;
                return this;
            }

            public MoCABuilder WithIsDeleted(bool value)
            {
                _MoCA.IsDeleted = value;
                return this;
            }

            public MoCA Raise()
            {
                _MoCA.Specify();
                if (_notificationHandler.HasNotification())
                    return new MoCA(_notificationHandler);

                return _MoCA;
            }
        }
    }
}