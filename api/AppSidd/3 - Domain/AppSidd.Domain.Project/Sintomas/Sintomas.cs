using AppSidd.Domain.Notifications;
using System;

namespace AppSidd.Domain.Project
{
    // 11 - atenção complexa maior
    // 12 - atenção complexa leve
    // 21 - função executiva maior
    // 22 - função executiva leve
    // 31 - aprendizagem e memoria maior
    // 32 - aprendizagem e memoria leve
    // 41 - linguagem maior
    // 42 - linguagem leve
    // 51 - perceptomotor maior
    // 52 - perceptomotor leve
    // 61 - cognição social maior
    // 62 - cognição social leve
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
