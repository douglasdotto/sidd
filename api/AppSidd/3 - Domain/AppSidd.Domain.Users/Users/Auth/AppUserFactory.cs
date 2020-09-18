using AppSidd.Domain.Users.Interfaces.Factory;
using AppSidd.Domain.Notifications;
using System;

namespace AppSidd.Domain.Users.Auth
{
    public class AppUserFactory: IAppUserFactory
    {
        private readonly INotificationHandler _notificationHandler;
        public AppUserFactory(INotificationHandler notificationHandler) => 
            _notificationHandler = notificationHandler;

        public AppUserBuilder DefaultBuilder()
            => new AppUserBuilder(_notificationHandler);

        public class AppUserBuilder
        {
            private readonly AppUser _appuser;
            private readonly INotificationHandler _notificationHandler;
            internal AppUserBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _appuser = new AppUser(notificationHandler);
            }
            
            public AppUserBuilder WithUserName(string value)
            {
                _appuser.UserName = value;
                return this;
            }


            public AppUserBuilder WithEmail(string value)
            {
                _appuser.Email = value;
                return this;
            }

            public AppUserBuilder WithFirstName(string value)
            {
                _appuser.FirstName = value;
                return this;
            }

            public AppUserBuilder WithLastName(string value)
            {
                _appuser.LastName = value;
                return this;
            }
            public AppUserBuilder WithUnityId(Guid value)
            {
                _appuser.UnityId = value;
                return this;
            }

            public AppUser Raise()
            {
                _appuser.Specify();
                if (_notificationHandler.HasNotification())
                    return new AppUser(_notificationHandler);

                return _appuser;
            }
        }
    }
}