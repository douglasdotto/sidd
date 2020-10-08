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
    public class InsertCDRRequestHandler : IRequestHandler<InsertCDRRequest, CDRDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly ICDRFactory _unFactory;
        private readonly INotification _notification;

        public InsertCDRRequestHandler(IUnitOfWork uow
            , IMapper mapper
            , ICDRFactory unFactory
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _unFactory = unFactory;
            _notification = notification;
        }

        public async Task<CDRDto> Handle(InsertCDRRequest request, CancellationToken cancellationToken)
        {
            var soma = request.CDR.Question1 + request.CDR.Question2 + request.CDR.Question3 + request.CDR.Question4 + request.CDR.Question5 + request.CDR.Question6;

            CDR un = _unFactory.DefaultBuilder()
                                .WithCDRId(new Guid())
                                .WithUserId(request.CDR.UserId)
                                .WithQuestion1(request.CDR.Question1)
                                .WithQuestion2(request.CDR.Question2)
                                .WithQuestion3(request.CDR.Question3)
                                .WithQuestion4(request.CDR.Question4)
                                .WithQuestion5(request.CDR.Question5)
                                .WithQuestion6(request.CDR.Question6)
                                .WithTotal(soma)
                                .WithCreated(DateTime.Now)
                                .WithCreatedBy(request.UserId)
                                .WithIsDeleted(false)
                                .Raise();

            un = await _uow.CDRRepository.InsertAsync(un);

            await _uow.Save();

            var CDRreturn = _mapper.Map<CDRDto>(un);

            return CDRreturn;
        }
    }
}
