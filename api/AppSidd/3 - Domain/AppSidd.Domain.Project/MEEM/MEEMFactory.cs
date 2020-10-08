
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Project.Interfaces.Factory;
using System;

namespace AppSidd.Domain.Project
{
    public class MEEMFactory : IMEEMFactory
    {
        private readonly INotificationHandler _notificationHandler;

        public MEEMFactory(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }

        public MEEMBuilder DefaultBuilder()
            => new MEEMBuilder(_notificationHandler);

        public class MEEMBuilder
        {
            private readonly MEEM _MEEM;
            private readonly INotificationHandler _notificationHandler;

            public MEEMBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _MEEM = new MEEM(notificationHandler);
            }

            public MEEMBuilder WithMEEMId(Guid value)
            {
                _MEEM.MEEMId = value;
                return this;
            }

            public MEEMBuilder WithUserId(string value)
            {
                _MEEM.UserId = value;
                return this;
            }

            public MEEMBuilder WithQuestion1(int value)
            {
                _MEEM.Question1 = value;
                return this;
            }

            public MEEMBuilder WithQuestion2(int value)
            {
                _MEEM.Question2 = value;
                return this;
            }

            public MEEMBuilder WithQuestion3(int value)
            {
                _MEEM.Question3 = value;
                return this;
            }

            public MEEMBuilder WithQuestion4(int value)
            {
                _MEEM.Question4 = value;
                return this;
            }

            public MEEMBuilder WithQuestion5(int value)
            {
                _MEEM.Question5 = value;
                return this;
            }

            public MEEMBuilder WithQuestion6(int value)
            {
                _MEEM.Question6 = value;
                return this;
            }

            public MEEMBuilder WithQuestion7(int value)
            {
                _MEEM.Question7 = value;
                return this;
            }

            public MEEMBuilder WithQuestion8(int value)
            {
                _MEEM.Question8 = value;
                return this;
            }

            public MEEMBuilder WithQuestion9(int value)
            {
                _MEEM.Question9 = value;
                return this;
            }

            public MEEMBuilder WithQuestion10(int value)
            {
                _MEEM.Question10 = value;
                return this;
            }

            public MEEMBuilder WithEscolaridade(int value)
            {
                _MEEM.Escolaridade = value;
                return this;
            }

            public MEEMBuilder WithTotal(int value)
            {
                _MEEM.Total = value;
                return this;
            }

            public MEEMBuilder WithCreated(DateTime value)
            {
                _MEEM.Created = value;
                return this;
            }

            public MEEMBuilder WithCreatedBy(string value)
            {
                _MEEM.CreatedBy = value;
                return this;
            }

            public MEEMBuilder WithUpdated(DateTime value)
            {
                _MEEM.Updated = value;
                return this;
            }

            public MEEMBuilder WithUpdatedBy(string value)
            {
                _MEEM.UpdatedBy = value;
                return this;
            }

            public MEEMBuilder WithIsDeleted(bool value)
            {
                _MEEM.IsDeleted = value;
                return this;
            }

            public MEEM Raise()
            {
                _MEEM.Specify();
                if (_notificationHandler.HasNotification())
                    return new MEEM(_notificationHandler);

                return _MEEM;
            }
        }
    }
}