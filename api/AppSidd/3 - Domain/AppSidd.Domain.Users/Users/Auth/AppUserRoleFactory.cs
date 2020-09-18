using AppSidd.Domain.Users.Interfaces.Factory;
using AppSidd.Domain.Notifications;

namespace AppSidd.Domain.Users.Auth
{
    public class AppUserRoleFactory: IAppUserRoleFactory
    {
        private readonly INotificationHandler _notificationHandler;
        public AppUserRoleFactory(INotificationHandler notificationHandler) => 
            _notificationHandler = notificationHandler;

        public AppUserRoleBuilder DefaultBuilder()
            => new AppUserRoleBuilder(_notificationHandler);

        public class AppUserRoleBuilder
        {
            private readonly AppUserRole _appuserrole;
            private readonly INotificationHandler _notificationHandler;
            internal AppUserRoleBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _appuserrole = new AppUserRole(notificationHandler);
            }
            
            public AppUserRoleBuilder WithRoleId(string value)
            {
                _appuserrole.RoleId = value;
                return this;
            }

            public AppUserRoleBuilder WithUserId(string value)
            {
                _appuserrole.UserId = value;
                return this;
            }

            public AppUserRole Raise()
            {
                _appuserrole.Specify();
                if (_notificationHandler.HasNotification())
                    return new AppUserRole(_notificationHandler);

                return _appuserrole;
            }
        }
    }
}