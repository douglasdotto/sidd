using AppSidd.Application.Dto;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Project;
using AppSidd.Domain.Project.Interfaces.Factory;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.App.Handlers
{
    public class InsertTesteSintomaRequestHandler : IRequestHandler<InsertTesteSintomaRequest, List<TesteSintomaDto>>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly ITesteSintomaFactory _unFactory;
        private readonly INotification _notification;

        public InsertTesteSintomaRequestHandler(IUnitOfWork uow
            , IMapper mapper
            , ITesteSintomaFactory unFactory
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _unFactory = unFactory;
            _notification = notification;
        }

        public async Task<List<TesteSintomaDto>> Handle(InsertTesteSintomaRequest request, CancellationToken cancellationToken)
        {
            List<TesteSintoma> lista = new List<TesteSintoma>();
            foreach (var a in request.TesteSintoma)
            {
                TesteSintoma un = _unFactory.DefaultBuilder()
                                    .WithTesteSintomaId(new Guid())
                                    .Raise();

                un = await _uow.TesteSintomaRepository.InsertAsync(un);

                lista.Add(un);
            }

            await _uow.Save();

            var Sintomasreturn = _mapper.Map<List<TesteSintomaDto>>(lista);

            return Sintomasreturn;
        }
    }
}
