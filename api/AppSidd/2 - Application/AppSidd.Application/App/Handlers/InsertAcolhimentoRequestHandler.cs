using AppSidd.Application.Dto;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Project;
using AppSidd.Domain.Project.Interfaces.Factory;
using AutoMapper;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.App.Handlers
{
    public class InsertAcolhimentoRequestHandler : IRequestHandler<InsertAcolhimentoRequest, AcolhimentoDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly IAcolhimentoFactory _unFactory;
        private readonly INotification _notification;

        public InsertAcolhimentoRequestHandler(IUnitOfWork uow
            , IMapper mapper
            , IAcolhimentoFactory unFactory
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _unFactory = unFactory;
            _notification = notification;
        }

        public async Task<AcolhimentoDto> Handle(InsertAcolhimentoRequest request, CancellationToken cancellationToken)
        {
            Acolhimento un = _unFactory.DefaultBuilder()
                                .WithAcolhimentoId(new Guid())
                                .WithUserId(request.Acolhimento.UserId)
                                .WithFrequenciaCardiaca(request.Acolhimento.FrequenciaCardiaca)
                                .WithGlicemia(request.Acolhimento.Glicemia)
                                .WithMedicamentos(request.Acolhimento.Medicamentos)
                                .WithObservacoes(request.Acolhimento.Observacoes)
                                .WithPressaoArterial(request.Acolhimento.PressaoArterial)
                                .WithSaturação(request.Acolhimento.Saturação)
                                .WithSintomas(request.Acolhimento.Sintomas)
                                .WithCreated(DateTime.Now)
                                .WithCreatedBy(request.UserId)
                                .WithIsDeleted(false)
                                .Raise();

            un = await _uow.AcolhimentoRepository.InsertAsync(un);

            await _uow.Save();

            var Acolhimentoreturn = _mapper.Map<AcolhimentoDto>(un);

            return Acolhimentoreturn;
        }
    }
}
