
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Project.Interfaces.Factory;
using System;

namespace AppSidd.Domain.Project
{
    public class SintomasFactory : ISintomasFactory
    {
        private readonly INotificationHandler _notificationHandler;

        public SintomasFactory(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }

        public SintomasBuilder DefaultBuilder()
            => new SintomasBuilder(_notificationHandler);

        public class SintomasBuilder
        {
            private readonly Sintomas _Sintomas;
            private readonly INotificationHandler _notificationHandler;

            public SintomasBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _Sintomas = new Sintomas(notificationHandler);
            }

            public SintomasBuilder WithSintomasId(Guid value)
            {
                _Sintomas.SintomasId = value;
                return this;
            }

            public SintomasBuilder WithDescricao(string value)
            {
                _Sintomas.Descricao = value;
                return this;
            }

            public SintomasBuilder Doenca1(int value)
            {
                _Sintomas.Doenca1 = value;
                return this;
            }

            public SintomasBuilder Doenca2(int value)
            {
                _Sintomas.Doenca2 = value;
                return this;
            }

            public SintomasBuilder Doenca3(int value)
            {
                _Sintomas.Doenca3 = value;
                return this;
            }

            public SintomasBuilder Doenca4(int value)
            {
                _Sintomas.Doenca4 = value;
                return this;
            }

            public SintomasBuilder Doenca5(int value)
            {
                _Sintomas.Doenca5 = value;
                return this;
            }

            public SintomasBuilder WithCreated(DateTime value)
            {
                _Sintomas.Created = value;
                return this;
            }

            public SintomasBuilder WithCreatedBy(string value)
            {
                _Sintomas.CreatedBy = value;
                return this;
            }

            public SintomasBuilder WithUpdated(DateTime value)
            {
                _Sintomas.Updated = value;
                return this;
            }

            public SintomasBuilder WithUpdatedBy(string value)
            {
                _Sintomas.UpdatedBy = value;
                return this;
            }

            public SintomasBuilder WithIsDeleted(bool value)
            {
                _Sintomas.IsDeleted = value;
                return this;
            }

            public Sintomas Raise()
            {
                _Sintomas.Specify();
                if (_notificationHandler.HasNotification())
                    return new Sintomas(_notificationHandler);

                return _Sintomas;
            }
        }
    }
}