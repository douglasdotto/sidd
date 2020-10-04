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
    public class InsertPfefferRequestHandler : IRequestHandler<InsertPfefferRequest, PfefferDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly IPfefferFactory _unFactory;
        private readonly INotification _notification;

        public InsertPfefferRequestHandler(IUnitOfWork uow
            , IMapper mapper
            , IPfefferFactory unFactory
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _unFactory = unFactory;
            _notification = notification;
        }

        public async Task<PfefferDto> Handle(InsertPfefferRequest request, CancellationToken cancellationToken)
        {
            if (!String.IsNullOrEmpty(request.Pfeffer.PfefferId))
            {
                Pfeffer Pfeffer = _uow.PfefferRepository.Find(x => !x.IsDeleted && x.PfefferId == new Guid(request.Pfeffer.PfefferId)).FirstOrDefault();

                if (Pfeffer == null)
                {
                    _notification.DefaultBuilder()
                                  .WithCode("InsertPfeffer_01")
                                  .WithMessage("O código da unidade informada é inválido.")
                                  .RaiseNotification();

                    return null;
                }

                Pfeffer.UserId = request.Pfeffer.UserId;
                Pfeffer.Question1 = request.Pfeffer.Question1;
                Pfeffer.Question2 = request.Pfeffer.Question2;
                Pfeffer.Question3 = request.Pfeffer.Question3;
                Pfeffer.Question4 = request.Pfeffer.Question4;
                Pfeffer.Question5 = request.Pfeffer.Question5;
                Pfeffer.Question6 = request.Pfeffer.Question6;
                Pfeffer.Question7 = request.Pfeffer.Question7;
                Pfeffer.Question8 = request.Pfeffer.Question8;
                Pfeffer.Question9 = request.Pfeffer.Question9;
                Pfeffer.Question10 = request.Pfeffer.Question10;
                var soma = Pfeffer.Question1 + Pfeffer.Question2 + Pfeffer.Question3 + Pfeffer.Question4 + Pfeffer.Question5 + Pfeffer.Question6 + Pfeffer.Question7 + Pfeffer.Question8 + Pfeffer.Question9 + Pfeffer.Question10;
                Pfeffer.Total = soma;

                Pfeffer.Updated = DateTime.Now;
                Pfeffer.UpdatedBy = request.UserId;

                Pfeffer.Specify();

                Pfeffer = _uow.PfefferRepository.Update(Pfeffer);

                await _uow.Save();

                var Pfefferreturn = _mapper.Map<PfefferDto>(Pfeffer);

                return Pfefferreturn;
            }
            else
            {
                var soma = request.Pfeffer.Question1 + request.Pfeffer.Question2 + request.Pfeffer.Question3 + request.Pfeffer.Question4 + request.Pfeffer.Question5 + request.Pfeffer.Question6 + request.Pfeffer.Question7 + request.Pfeffer.Question8 + request.Pfeffer.Question9 + request.Pfeffer.Question10;

                Pfeffer un = _unFactory.DefaultBuilder()
                                    .WithPfefferId(new Guid())
                                    .WithUserId(request.Pfeffer.UserId)
                                    .WithQuestion1(request.Pfeffer.Question1)
                                    .WithQuestion2(request.Pfeffer.Question2)
                                    .WithQuestion3(request.Pfeffer.Question3)
                                    .WithQuestion4(request.Pfeffer.Question4)
                                    .WithQuestion5(request.Pfeffer.Question5)
                                    .WithQuestion6(request.Pfeffer.Question6)
                                    .WithQuestion7(request.Pfeffer.Question7)
                                    .WithQuestion8(request.Pfeffer.Question8)
                                    .WithQuestion9(request.Pfeffer.Question9)
                                    .WithQuestion10(request.Pfeffer.Question10)
                                    .WithTotal(soma)
                                    .WithCreated(DateTime.Now)
                                    .WithCreatedBy(request.UserId)
                                    .WithIsDeleted(false)
                                    .Raise();

                un = await _uow.PfefferRepository.InsertAsync(un);

                await _uow.Save();

                var Pfefferreturn = _mapper.Map<PfefferDto>(un);

                return Pfefferreturn;
            }
        }
    }
}
