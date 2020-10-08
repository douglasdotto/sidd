
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Project.Interfaces.Factory;
using System;

namespace AppSidd.Domain.Project
{
    public class CDRFactory : ICDRFactory
    {
        private readonly INotificationHandler _notificationHandler;

        public CDRFactory(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }

        public CDRBuilder DefaultBuilder()
            => new CDRBuilder(_notificationHandler);

        public class CDRBuilder
        {
            private readonly CDR _CDR;
            private readonly INotificationHandler _notificationHandler;

            public CDRBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _CDR = new CDR(notificationHandler);
            }

            public CDRBuilder WithCDRId(Guid value)
            {
                _CDR.CDRId = value;
                return this;
            }

            public CDRBuilder WithUserId(string value)
            {
                _CDR.UserId = value;
                return this;
            }

            public CDRBuilder WithQuestion1(decimal value)
            {
                _CDR.Question1 = value;
                return this;
            }

            public CDRBuilder WithQuestion2(decimal value)
            {
                _CDR.Question2 = value;
                return this;
            }

            public CDRBuilder WithQuestion3(decimal value)
            {
                _CDR.Question3 = value;
                return this;
            }

            public CDRBuilder WithQuestion4(decimal value)
            {
                _CDR.Question4 = value;
                return this;
            }

            public CDRBuilder WithQuestion5(decimal value)
            {
                _CDR.Question5 = value;
                return this;
            }

            public CDRBuilder WithQuestion6(decimal value)
            {
                _CDR.Question6 = value;
                return this;
            }

            public CDRBuilder WithTotal(decimal value)
            {
                _CDR.Total = value;
                return this;
            }

            public CDRBuilder WithCreated(DateTime value)
            {
                _CDR.Created = value;
                return this;
            }

            public CDRBuilder WithCreatedBy(string value)
            {
                _CDR.CreatedBy = value;
                return this;
            }

            public CDRBuilder WithUpdated(DateTime value)
            {
                _CDR.Updated = value;
                return this;
            }

            public CDRBuilder WithUpdatedBy(string value)
            {
                _CDR.UpdatedBy = value;
                return this;
            }

            public CDRBuilder WithIsDeleted(bool value)
            {
                _CDR.IsDeleted = value;
                return this;
            }

            public CDR Raise()
            {
                _CDR.Specify();
                if (_notificationHandler.HasNotification())
                    return new CDR(_notificationHandler);

                return _CDR;
            }
        }
    }
}