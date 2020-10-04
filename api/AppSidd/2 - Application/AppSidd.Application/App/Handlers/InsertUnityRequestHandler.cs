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
    public class InsertUnityRequestHandler : IRequestHandler<InsertUnityRequest, UnityDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly IUnityFactory _unFactory;
        private readonly INotification _notification;

        public InsertUnityRequestHandler(IUnitOfWork uow
            , IMapper mapper
            , IUnityFactory unFactory
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _unFactory = unFactory;
            _notification = notification;
        }

        public async Task<UnityDto> Handle(InsertUnityRequest request, CancellationToken cancellationToken)
        {
            if (!String.IsNullOrEmpty(request.Unity.UnityId))
            {
                Unity unity = _uow.UnityRepository.Find(x => !x.IsDeleted && x.UnityId == new Guid(request.Unity.UnityId)).FirstOrDefault();

                if (unity == null)
                {
                    _notification.DefaultBuilder()
                                  .WithCode("InsertUnity_01")
                                  .WithMessage("O código da unidade informada é inválido.")
                                  .RaiseNotification();

                    return null;
                }

                unity.UnityName = request.Unity.UnityName;

                unity.Specify();

                unity = _uow.UnityRepository.Update(unity);

                await _uow.Save();

                var unityreturn = _mapper.Map<UnityDto>(unity);

                return unityreturn;
            }
            else
            {
                Unity un = _unFactory.DefaultBuilder()
                                    .WithUnityId(new Guid())
                                    .WithUnityName(request.Unity.UnityName)
                                    .WithCreated(DateTime.Now)
                                    .WithCreatedBy(request.UserId)
                                    .WithIsDeleted(false)
                                    .Raise();

                un = await _uow.UnityRepository.InsertAsync(un);

                await _uow.Save();

                var unityreturn = _mapper.Map<UnityDto>(un);

                return unityreturn;
            }
        }
    }
}
