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
    public class InsertMoCARequestHandler : IRequestHandler<InsertMoCARequest, MoCADto>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly IMoCAFactory _unFactory;
        private readonly INotification _notification;

        public InsertMoCARequestHandler(IUnitOfWork uow
            , IMapper mapper
            , IMoCAFactory unFactory
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _unFactory = unFactory;
            _notification = notification;
        }

        public async Task<MoCADto> Handle(InsertMoCARequest request, CancellationToken cancellationToken)
        {
            var soma = request.MoCA.Question1 + request.MoCA.Question2 + request.MoCA.Question3 + request.MoCA.Question4 + request.MoCA.Question5 + request.MoCA.Question6 + request.MoCA.Question7 + request.MoCA.Question8 + request.MoCA.Question9 + request.MoCA.Question10;

            MoCA un = _unFactory.DefaultBuilder()
                                .WithMoCAId(new Guid())
                                .WithUserId(request.MoCA.UserId)
                                .WithQuestion1(request.MoCA.Question1)
                                .WithQuestion2(request.MoCA.Question2)
                                .WithQuestion3(request.MoCA.Question3)
                                .WithQuestion4(request.MoCA.Question4)
                                .WithQuestion5(request.MoCA.Question5)
                                .WithQuestion6(request.MoCA.Question6)
                                .WithQuestion7(request.MoCA.Question7)
                                .WithQuestion8(request.MoCA.Question8)
                                .WithQuestion9(request.MoCA.Question9)
                                .WithQuestion10(request.MoCA.Question10)
                                .WithTotal(soma)
                                .WithCreated(DateTime.Now)
                                .WithCreatedBy(request.UserId)
                                .WithIsDeleted(false)
                                .Raise();

            un = await _uow.MoCARepository.InsertAsync(un);

            await _uow.Save();

            var MoCAreturn = _mapper.Map<MoCADto>(un);

            return MoCAreturn;
        }
    }
}
