
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Project.Interfaces.Factory;
using System;

namespace AppSidd.Domain.Project
{
    public class AcolhimentoFactory : IAcolhimentoFactory
    {
        private readonly INotificationHandler _notificationHandler;

        public AcolhimentoFactory(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }

        public AcolhimentoBuilder DefaultBuilder()
            => new AcolhimentoBuilder(_notificationHandler);

        public class AcolhimentoBuilder
        {
            private readonly Acolhimento _Acolhimento;
            private readonly INotificationHandler _notificationHandler;

            public AcolhimentoBuilder(INotificationHandler notificationHandler)
            {
                _notificationHandler = notificationHandler;
                _Acolhimento = new Acolhimento(notificationHandler);
            }

            public AcolhimentoBuilder WithAcolhimentoId(Guid value)
            {
                _Acolhimento.AcolhimentoId = value;
                return this;
            }

            public AcolhimentoBuilder WithUserId(string value)
            {
                _Acolhimento.UserId = value;
                return this;
            }

            public AcolhimentoBuilder WithFrequenciaCardiaca(string value)
            {
                _Acolhimento.FrequenciaCardiaca = value;
                return this;
            }

            public AcolhimentoBuilder WithSaturação(string value)
            {
                _Acolhimento.Saturação = value;
                return this;
            }

            public AcolhimentoBuilder WithPressaoArterial(string value)
            {
                _Acolhimento.PressaoArterial = value;
                return this;
            }

            public AcolhimentoBuilder WithGlicemia(string value)
            {
                _Acolhimento.Glicemia = value;
                return this;
            }

            public AcolhimentoBuilder WithSintomas(string value)
            {
                _Acolhimento.Sintomas = value;
                return this;
            }

            public AcolhimentoBuilder WithMedicamentos(string value)
            {
                _Acolhimento.Medicamentos = value;
                return this;
            }

            public AcolhimentoBuilder WithObservacoes(string value)
            {
                _Acolhimento.Observacoes = value;
                return this;
            }

            public AcolhimentoBuilder WithCreated(DateTime value)
            {
                _Acolhimento.Created = value;
                return this;
            }

            public AcolhimentoBuilder WithCreatedBy(string value)
            {
                _Acolhimento.CreatedBy = value;
                return this;
            }

            public AcolhimentoBuilder WithUpdated(DateTime value)
            {
                _Acolhimento.Updated = value;
                return this;
            }

            public AcolhimentoBuilder WithUpdatedBy(string value)
            {
                _Acolhimento.UpdatedBy = value;
                return this;
            }

            public AcolhimentoBuilder WithIsDeleted(bool value)
            {
                _Acolhimento.IsDeleted = value;
                return this;
            }

            public Acolhimento Raise()
            {
                _Acolhimento.Specify();
                if (_notificationHandler.HasNotification())
                    return new Acolhimento(_notificationHandler);

                return _Acolhimento;
            }
        }
    }
}