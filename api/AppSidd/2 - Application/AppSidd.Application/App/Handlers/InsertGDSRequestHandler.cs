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
    public class InsertGDSRequestHandler : IRequestHandler<InsertGDSRequest, GDSDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly IGDSFactory _unFactory;
        private readonly INotification _notification;

        public InsertGDSRequestHandler(IUnitOfWork uow
            , IMapper mapper
            , IGDSFactory unFactory
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _unFactory = unFactory;
            _notification = notification;
        }

        public async Task<GDSDto> Handle(InsertGDSRequest request, CancellationToken cancellationToken)
        {
            var soma = request.GDS.Question1 + request.GDS.Question2 + request.GDS.Question3 + request.GDS.Question4 + request.GDS.Question5 + request.GDS.Question6 + request.GDS.Question7 + request.GDS.Question8 + request.GDS.Question9 + request.GDS.Question10 + request.GDS.Question11 + request.GDS.Question12 + request.GDS.Question13 + request.GDS.Question14 + request.GDS.Question15;

            GDS un = _unFactory.DefaultBuilder()
                                .WithGDSId(new Guid())
                                .WithUserId(request.GDS.UserId)
                                .WithQuestion1(request.GDS.Question1)
                                .WithQuestion2(request.GDS.Question2)
                                .WithQuestion3(request.GDS.Question3)
                                .WithQuestion4(request.GDS.Question4)
                                .WithQuestion5(request.GDS.Question5)
                                .WithQuestion6(request.GDS.Question6)
                                .WithQuestion7(request.GDS.Question7)
                                .WithQuestion8(request.GDS.Question8)
                                .WithQuestion9(request.GDS.Question9)
                                .WithQuestion10(request.GDS.Question10)
                                .WithQuestion11(request.GDS.Question11)
                                .WithQuestion12(request.GDS.Question12)
                                .WithQuestion13(request.GDS.Question13)
                                .WithQuestion14(request.GDS.Question14)
                                .WithQuestion15(request.GDS.Question15)
                                .WithTotal(soma)
                                .WithCreated(DateTime.Now)
                                .WithCreatedBy(request.UserId)
                                .WithIsDeleted(false)
                                .Raise();

            un = await _uow.GDSRepository.InsertAsync(un);

            await _uow.Save();

            var GDSreturn = _mapper.Map<GDSDto>(un);

            return GDSreturn;
        }
    }
}
