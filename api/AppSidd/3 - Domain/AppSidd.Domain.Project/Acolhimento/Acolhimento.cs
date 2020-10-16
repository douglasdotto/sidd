using AppSidd.Domain.Notifications;
using System;

namespace AppSidd.Domain.Project
{
    public class Acolhimento
    {
        private readonly INotificationHandler _notificationHandler;

        internal Acolhimento() { }
        internal Acolhimento(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }
        public Guid AcolhimentoId { get; set; }
        public string UserId { get; set; }
        public string FrequenciaCardiaca { get; set; }
        public string Saturação { get; set; }
        public string PressaoArterial { get; set; }
        public string Glicemia { get; set; }
        public string Sintomas { get; set; }
        public string Medicamentos { get; set; }
        public string Observacoes { get; set; }
        public DateTime Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool IsDeleted { get; set; }

        public bool IsValid => !_notificationHandler.HasNotification();

        public void Specify()
        {
            var specifications = new AcolhimentoSpecifications();
            foreach (var specification in specifications)
            {
                var validation = specification.Condition();
                if (!validation(this))
                    _notificationHandler
                        .DefaultBuilder()
                        .WithCode(specification.Code)
                        .WithMessage(specification.Message)
                        .WithDetailMessage(specification.DetailMessage)
                        .RaiseNotification();
            }
        }
    }
}
