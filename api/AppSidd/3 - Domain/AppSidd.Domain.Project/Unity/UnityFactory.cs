
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Project.Interfaces.Factory;
using System;

namespace AppSidd.Domain.Project
{
    public class UnityFactory : IUnityFactory
    {
        private readonly INotificationHandler _notificationHandler;

        public UnityFactory(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }

        public UnityBuilder DefaultBuilder()
            => new UnityBuilder(_notificationHandler);

        public class UnityBuilder
        {
            private readonly Unity _Unity;
            private readonly INotificationHandler _notificationHandler;

            public UnityBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _Unity = new Unity(notificationHandler);
            }

            public UnityBuilder WithUnityId(Guid value)
            {
                _Unity.UnityId = value;
                return this;
            }

            public UnityBuilder WithUnityName(string value)
            {
                _Unity.UnityName = value;
                return this;
            }

            public UnityBuilder WithCreated(DateTime value)
            {
                _Unity.Created = value;
                return this;
            }

            public UnityBuilder WithCreatedBy(string value)
            {
                _Unity.CreatedBy = value;
                return this;
            }

            public UnityBuilder WithUpdated(DateTime value)
            {
                _Unity.Updated = value;
                return this;
            }

            public UnityBuilder WithUpdatedBy(string value)
            {
                _Unity.UpdatedBy = value;
                return this;
            }

            public UnityBuilder WithIsDeleted(bool value)
            {
                _Unity.IsDeleted = value;
                return this;
            }

            public Unity Raise()
            {
                _Unity.Specify();
                if (_notificationHandler.HasNotification())
                    return new Unity(_notificationHandler);

                return _Unity;
            }
        }
    }
}