using AppSidd.Domain.Notifications;
using System;

namespace AppSidd.Domain.Project
{
    // 1 - Alzheimer 1° estágio
    // 2 - Alzheimer 2° estágio
    // 3 - Alzheimer 3° estágio
    // 4 - Fronto
    // 5 - Lewy
    // 6 - Vascular
    // 7 - Parkinson
    public class Sintomas
    {
        private readonly INotificationHandler _notificationHandler;

        internal Sintomas() { }
        internal Sintomas(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }
        public Guid SintomasId { get; set; }
        public string Descricao { get; set; }
        public int Doenca1 { get; set; }
        public int? Doenca2 { get; set; }
        public int? Doenca3 { get; set; }
        public int? Doenca4 { get; set; }
        public int? Doenca5 { get; set; }
        public DateTime Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool IsDeleted { get; set; }

        public bool IsValid => !_notificationHandler.HasNotification();

        public void Specify()
        {
            var specifications = new SintomasSpecifications();
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
