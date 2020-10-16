using AppSidd.Application.Dto;
using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Users.Auth;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Threading;
using System.Threading.Tasks;
using INotification = AppSidd.Domain.Notifications.INotificationHandler;

namespace AppSidd.Application.Users.Handlers
{
    public class GetViewDashByPatientRequestHandler : IRequestHandler<GetViewDashByPatientRequest, UserDto>
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly INotification _notification;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;

        public GetViewDashByPatientRequestHandler(IUnitOfWork uow
            , IMapper mapper
            , UserManager<AppUser> userManager
            , RoleManager<AppRole> roleManager
            , INotification notification)
        {
            _uow = uow;
            _mapper = mapper;
            _userManager = userManager;
            _roleManager = roleManager;
            _notification = notification;
        }

        public async Task<UserDto> Handle(GetViewDashByPatientRequest request, CancellationToken cancellationToken)
        {
            var appUser = await _userManager.FindByIdAsync(request.PatientId);
            if (appUser == null)
            {
                _notification.DefaultBuilder()
                    .WithCode("GetUserByLogin_01")
                    .WithMessage("Usuário não encontrado.")
                    .RaiseNotification();

                return null;
            }
            List<TestsDto> tests = new List<TestsDto>();
            var cdr = _uow.CDRRepository.Find(x => !x.IsDeleted && x.UserId == request.PatientId).ToList();
            foreach (var c in cdr)
            {
                TestsDto test = new TestsDto
                {
                    Type = "CDR",
                    TotalPoints = c.Total.ToString("N2"),
                    Date = c.Created
                };
                if (c.Total <= 4)
                {
                    test.Classification = "Normal";
                    test.Color = "G";
                }
                else if (c.Total > 4 && c.Total < 9)
                {
                    test.Classification = "Suspeita de demência";
                    test.Color = "Y";
                }
                else
                {
                    test.Classification = "Possível demência existente";
                    test.Color = "R";
                }
                tests.Add(test);
            }
            var meem = _uow.MEEMRepository.Find(x => !x.IsDeleted && x.UserId == request.PatientId).ToList();
            foreach (var c in meem)
            {
                TestsDto test = new TestsDto
                {
                    Type = "Mini-Mental (MEEM)",
                    TotalPoints = c.Total.ToString("N2"),
                    Date = c.Created
                };
                if (c.Escolaridade == 1 && c.Total <= 21)
                {
                    test.Classification = "Com base na escolaridade selecionada (analfabeto), o usuário está reprovado, possível demência existente";
                    test.Color = "R";
                }
                if (c.Escolaridade == 1 && c.Total > 21)
                {
                    test.Classification = "Com base na escolaridade selecionada (analfabeto), o usuário está aprovado";
                    test.Color = "G";
                }

                if (c.Escolaridade == 2 && c.Total <= 24)
                {
                    test.Classification = "Com base na escolaridade selecionada (1 a 5 anos de escolaridade), o usuário está reprovado, possível demência existente";
                    test.Color = "R";
                }
                if (c.Escolaridade == 2 && c.Total > 24)
                {
                    test.Classification = "Com base na escolaridade selecionada (1 a 5 anos de escolaridade), o usuário está aprovado";
                    test.Color = "G";
                }

                if (c.Escolaridade == 3 && c.Total <= 26)
                {
                    test.Classification = "Com base na escolaridade selecionada (6 a 11 anos de escolaridade), o usuário está reprovado, possível demência existente";
                    test.Color = "R";
                }
                if (c.Escolaridade == 3 && c.Total > 26)
                {
                    test.Classification = "Com base na escolaridade selecionada (6 a 11 anos de escolaridade), o usuário está aprovado";
                    test.Color = "G";
                }

                if (c.Escolaridade == 4 && c.Total <= 27)
                {
                    test.Classification = "Com base na escolaridade selecionada (12 anos ou mais de escolaridade), o usuário está reprovado, possível demência existente";
                    test.Color = "R";
                }
                if (c.Escolaridade == 4 && c.Total > 27)
                {
                    test.Classification = "Com base na escolaridade selecionada (12 anos ou mais de escolaridade), o usuário está aprovado";
                    test.Color = "G";
                }
                tests.Add(test);
            }
            var moca = _uow.MoCARepository.Find(x => !x.IsDeleted && x.UserId == request.PatientId).ToList();
            foreach (var c in moca)
            {
                TestsDto test = new TestsDto
                {
                    Type = "MoCA",
                    TotalPoints = c.Total.ToString("N2"),
                    Date = c.Created
                };
                if (c.Total <= 24)
                {
                    test.Classification = "Comprometimento cognitivo";
                    test.Color = "R";
                }
                else
                {
                    test.Classification = "Pontuação normal";
                    test.Color = "G";
                }
                tests.Add(test);
            }
            var pfeffer = _uow.PfefferRepository.Find(x => !x.IsDeleted && x.UserId == request.PatientId).ToList();
            foreach (var c in pfeffer)
            {
                TestsDto test = new TestsDto
                {
                    Type = "Pfeffer",
                    TotalPoints = c.Total.ToString("N2"),
                    Date = c.Created
                };
                if (c.Total >= 5)
                {
                    test.Classification = "Pontuação chama a atenção e indica comprometimento funcional";
                    test.Color = "R";
                }
                else if (c.Total >= 3 && c.Total < 5)
                {
                    test.Classification = "Suspeita de demência";
                    test.Color = "Y";
                }
                else
                {
                    test.Classification = "Normal";
                    test.Color = "G";
                }
                tests.Add(test);
            }

            var acolhimentos = _uow.AcolhimentoRepository.Find(x => !x.IsDeleted && x.UserId == request.PatientId).OrderBy(x => x.Created).ToList();

            List<AcolhimentoDto> acoDto = new List<AcolhimentoDto>();
            foreach (var aco in acolhimentos)
            {
                AcolhimentoDto novo = new AcolhimentoDto();
                novo = _mapper.Map<AcolhimentoDto>(aco);
                try
                {
                    if (Convert.ToInt32(novo.Glicemia) < 70)
                        novo.Glicemia = novo.Glicemia + " - Hipoglicémia, valores baixos podem causar confusão mental; alterações do nível de consciência; perturbações visuais e de comportamento que podem ser confundidas com sintomas de demência.";
                    else if (Convert.ToInt32(novo.Glicemia) >= 110 && Convert.ToInt32(novo.Glicemia) < 126)
                        novo.Glicemia = novo.Glicemia + " - Este paciente pode estar desenvolvendo um quadro de pré-diabetes.";
                    else if (Convert.ToInt32(novo.Glicemia) >= 126)
                        novo.Glicemia = novo.Glicemia + " - Este paciente possivelmente está com diabetes.";
                    else
                        novo.Glicemia = novo.Glicemia;
                }
                catch { }

                try
                {
                    if (Convert.ToInt32(novo.FrequenciaCardiaca) > 100 || Convert.ToInt32(novo.FrequenciaCardiaca) < 60)
                        novo.FrequenciaCardiaca = novo.FrequenciaCardiaca + " - Normalmente, um coração sadio e descansado tem de 60 a 100 batidas por minuto. A arritmia cardíaca é mais frequente em idosos, com isso, pode elevar significativamente o risco de demências e outros problemas neurológicos.";
                }
                catch { }

                try
                {
                    if (Convert.ToInt32(novo.Saturação) < 90)
                        novo.Saturação = novo.Saturação + " - Saturação baixa interfere no fornecimento de sangue ou de oxigênio para o cérebro, podendo causar demência vascular. Tambem pode afetar o estado de alerta, a memória e a função executiva.";
                }
                catch { }

                try
                {
                    var pressao1 = novo.PressaoArterial.Split("/")[0];
                    var pressao2 = novo.PressaoArterial.Split("/")[1];
                    var pressao = novo.PressaoArterial;
                    if (Convert.ToInt32(pressao1) == 13 || Convert.ToInt32(pressao2) == 8)
                        novo.PressaoArterial = pressao + " - Fase 1 - A hipertensão é ruim para o cérebro e pode provocar danos nos vasos sanguíneos, a demência vascular, causada por um fluxo sanguíneo reduzido para o cérebro, é a segunda causa mais comum de demência.";
                    if (Convert.ToInt32(pressao1) >= 14 || Convert.ToInt32(pressao2) >= 9)
                        novo.PressaoArterial = pressao + " - Fase 2 - A hipertensão é ruim para o cérebro e pode provocar danos nos vasos sanguíneos, a demência vascular, causada por um fluxo sanguíneo reduzido para o cérebro, é a segunda causa mais comum de demência.";
                    if (Convert.ToInt32(pressao1) >= 18 || Convert.ToInt32(pressao2) >= 12)
                        novo.PressaoArterial = pressao + " - CRITICO - A hipertensão é ruim para o cérebro e pode provocar danos nos vasos sanguíneos, a demência vascular, causada por um fluxo sanguíneo reduzido para o cérebro, é a segunda causa mais comum de demência.";

                }
                catch { }

                acoDto.Add(novo);
            }
            var result = _mapper.Map<UserDto>(appUser);
            result.Tests = tests.OrderBy(x => x.Date).ToList();
            result.TotalTests = tests.Count();
            result.Acolhimento = acoDto;
            result.Diagnostico = "Ainda não é possível informar um diagnóstico.";

            return result;
        }
    }
}
