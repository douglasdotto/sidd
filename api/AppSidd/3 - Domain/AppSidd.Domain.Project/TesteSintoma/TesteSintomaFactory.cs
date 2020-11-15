
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Project.Interfaces.Factory;
using System;

namespace AppSidd.Domain.Project
{
    public class TesteSintomaFactory : ITesteSintomaFactory
    {
        private readonly INotificationHandler _notificationHandler;

        public TesteSintomaFactory(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }

        public TesteSintomaBuilder DefaultBuilder()
            => new TesteSintomaBuilder(_notificationHandler);

        public class TesteSintomaBuilder
        {
            private readonly TesteSintoma _TesteSintoma;
            private readonly INotificationHandler _notificationHandler;

            public TesteSintomaBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _TesteSintoma = new TesteSintoma(notificationHandler);
            }

            public TesteSintomaBuilder WithTesteSintomaId(Guid value)
            {
                _TesteSintoma.TesteSintomaId = value;
                return this;
            }

            public TesteSintomaBuilder UserId(string value)
            {
                _TesteSintoma.UserId = value;
                return this;
            }

            public TesteSintomaBuilder SintomasId(Guid value)
            {
                _TesteSintoma.SintomasId = value;
                return this;
            }

            public TesteSintomaBuilder WithCreated(DateTime value)
            {
                _TesteSintoma.Created = value;
                return this;
            }

            public TesteSintomaBuilder WithCreatedBy(string value)
            {
                _TesteSintoma.CreatedBy = value;
                return this;
            }

            public TesteSintomaBuilder WithUpdated(DateTime value)
            {
                _TesteSintoma.Updated = value;
                return this;
            }

            public TesteSintomaBuilder WithUpdatedBy(string value)
            {
                _TesteSintoma.UpdatedBy = value;
                return this;
            }

            public TesteSintomaBuilder WithIsDeleted(bool value)
            {
                _TesteSintoma.IsDeleted = value;
                return this;
            }

            public TesteSintoma Raise()
            {
                _TesteSintoma.Specify();
                if (_notificationHandler.HasNotification())
                    return new TesteSintoma(_notificationHandler);

                return _TesteSintoma;
            }
        }
    }
}