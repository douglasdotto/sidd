using AppSidd.Domain.Notifications;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppSidd.Domain.Project
{
    public class TesteSintoma
    {
        private readonly INotificationHandler _notificationHandler;

        internal TesteSintoma() { }
        private TesteSintoma(ILazyLoader lazyLoader)
        {
            LazyLoader = lazyLoader;
        }
        private ILazyLoader LazyLoader { get; set; }
        internal TesteSintoma(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }
        public Guid TesteSintomaId { get; set; }
        public string Descricao { get; set; }
        public Guid SintomasId { get; set; }
        [ForeignKey("SintomasId")]
        private Sintomas _Sintomas;
        public virtual Sintomas Sintomas
        {
            get => LazyLoader.Load(this, ref _Sintomas);
            set => _Sintomas = value;
        }
        public DateTime Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool IsDeleted { get; set; }

        public bool IsValid => !_notificationHandler.HasNotification();

        public void Specify()
        {
            var specifications = new TesteSintomaSpecifications();
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
