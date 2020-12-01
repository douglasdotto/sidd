
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Project.Interfaces.Factory;
using System;

namespace AppSidd.Domain.Project
{
    public class GDSFactory : IGDSFactory
    {
        private readonly INotificationHandler _notificationHandler;

        public GDSFactory(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }

        public GDSBuilder DefaultBuilder()
            => new GDSBuilder(_notificationHandler);

        public class GDSBuilder
        {
            private readonly GDS _GDS;
            private readonly INotificationHandler _notificationHandler;

            public GDSBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _GDS = new GDS(notificationHandler);
            }

            public GDSBuilder WithGDSId(Guid value)
            {
                _GDS.GDSId = value;
                return this;
            }

            public GDSBuilder WithUserId(string value)
            {
                _GDS.UserId = value;
                return this;
            }

            public GDSBuilder WithQuestion1(int value)
            {
                _GDS.Question1 = value;
                return this;
            }

            public GDSBuilder WithQuestion2(int value)
            {
                _GDS.Question2 = value;
                return this;
            }

            public GDSBuilder WithQuestion3(int value)
            {
                _GDS.Question3 = value;
                return this;
            }

            public GDSBuilder WithQuestion4(int value)
            {
                _GDS.Question4 = value;
                return this;
            }

            public GDSBuilder WithQuestion5(int value)
            {
                _GDS.Question5 = value;
                return this;
            }

            public GDSBuilder WithQuestion6(int value)
            {
                _GDS.Question6 = value;
                return this;
            }

            public GDSBuilder WithQuestion7(int value)
            {
                _GDS.Question7 = value;
                return this;
            }

            public GDSBuilder WithQuestion8(int value)
            {
                _GDS.Question8 = value;
                return this;
            }

            public GDSBuilder WithQuestion9(int value)
            {
                _GDS.Question9 = value;
                return this;
            }

            public GDSBuilder WithQuestion10(int value)
            {
                _GDS.Question10 = value;
                return this;
            }

            public GDSBuilder WithQuestion11(int value)
            {
                _GDS.Question11 = value;
                return this;
            }

            public GDSBuilder WithQuestion12(int value)
            {
                _GDS.Question12 = value;
                return this;
            }

            public GDSBuilder WithQuestion13(int value)
            {
                _GDS.Question13 = value;
                return this;
            }

            public GDSBuilder WithQuestion14(int value)
            {
                _GDS.Question14 = value;
                return this;
            }

            public GDSBuilder WithQuestion15(int value)
            {
                _GDS.Question15 = value;
                return this;
            }

            public GDSBuilder WithTotal(int value)
            {
                _GDS.Total = value;
                return this;
            }

            public GDSBuilder WithCreated(DateTime value)
            {
                _GDS.Created = value;
                return this;
            }

            public GDSBuilder WithCreatedBy(string value)
            {
                _GDS.CreatedBy = value;
                return this;
            }

            public GDSBuilder WithUpdated(DateTime value)
            {
                _GDS.Updated = value;
                return this;
            }

            public GDSBuilder WithUpdatedBy(string value)
            {
                _GDS.UpdatedBy = value;
                return this;
            }

            public GDSBuilder WithIsDeleted(bool value)
            {
                _GDS.IsDeleted = value;
                return this;
            }

            public GDS Raise()
            {
                _GDS.Specify();
                if (_notificationHandler.HasNotification())
                    return new GDS(_notificationHandler);

                return _GDS;
            }
        }
    }
}