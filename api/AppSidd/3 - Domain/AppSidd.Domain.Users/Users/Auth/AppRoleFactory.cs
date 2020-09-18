
using AppSidd.Domain.Users.Interfaces.Factory;
using AppSidd.Domain.Notifications;
using System;

namespace AppSidd.Domain.Users.Auth
{
    public class AppRoleFactory: IAppRoleFactory
    {
        private readonly INotificationHandler _notificationHandler;
        public AppRoleFactory(INotificationHandler notificationHandler) => 
            _notificationHandler = notificationHandler;

        public AppRoleBuilder DefaultBuilder()
            => new AppRoleBuilder(_notificationHandler);

        public class AppRoleBuilder
        {
            private readonly AppRole _AppRole;
            private readonly INotificationHandler _notificationHandler;
            internal AppRoleBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _AppRole = new AppRole(notificationHandler);
            }
            
            public AppRoleBuilder WithId(string value)
            {
                _AppRole.Id = value;
                return this;
            }

            public AppRoleBuilder WithName(string value)
            {
                _AppRole.Name = value;
                return this;
            }

            public AppRoleBuilder WithNormalizedName(string value)
            {
                _AppRole.NormalizedName = value;
                return this;
            }

            public AppRole Raise()
            {
                _AppRole.Specify();
                if (_notificationHandler.HasNotification())
                    return new AppRole(_notificationHandler);

                return _AppRole;
            }
        }
    }
}