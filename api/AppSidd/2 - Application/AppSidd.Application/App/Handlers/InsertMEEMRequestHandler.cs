using AppSidd.Application.Dto;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Project;
using AppSidd.Domain.Project.Interfaces.Factory;
using AutoMapper;
using MediatR;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.App.Handlers
{
    public class InsertMEEMRequestHandler : IRequestHandler<InsertMEEMRequest, MEEMDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly IMEEMFactory _unFactory;
        private readonly INotification _notification;

        public InsertMEEMRequestHandler(IUnitOfWork uow
            , IMapper mapper
            , IMEEMFactory unFactory
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _unFactory = unFactory;
            _notification = notification;
        }

        public async Task<MEEMDto> Handle(InsertMEEMRequest request, CancellationToken cancellationToken)
        {
            var soma = request.MEEM.Question1 + request.MEEM.Question2 + request.MEEM.Question3 + request.MEEM.Question4 + request.MEEM.Question5 + request.MEEM.Question6 + request.MEEM.Question7 + request.MEEM.Question8 + request.MEEM.Question9 + request.MEEM.Question10;

            MEEM un = _unFactory.DefaultBuilder()
                                .WithMEEMId(new Guid())
                                .WithUserId(request.MEEM.UserId)
                                .WithQuestion1(request.MEEM.Question1)
                                .WithQuestion2(request.MEEM.Question2)
                                .WithQuestion3(request.MEEM.Question3)
                                .WithQuestion4(request.MEEM.Question4)
                                .WithQuestion5(request.MEEM.Question5)
                                .WithQuestion6(request.MEEM.Question6)
                                .WithQuestion7(request.MEEM.Question7)
                                .WithQuestion8(request.MEEM.Question8)
                                .WithQuestion9(request.MEEM.Question9)
                                .WithQuestion10(request.MEEM.Question10)
                                .WithEscolaridade(request.MEEM.Escolaridade)
                                .WithTotal(soma)
                                .WithCreated(DateTime.Now)
                                .WithCreatedBy(request.UserId)
                                .WithIsDeleted(false)
                                .Raise();

            un = await _uow.MEEMRepository.InsertAsync(un);

            await _uow.Save();

            var MEEMreturn = _mapper.Map<MEEMDto>(un);

            return MEEMreturn;
        }
    }
}
