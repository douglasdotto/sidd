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
            int reprovacao = 0;
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
                    reprovacao++;
                }
                else
                {
                    test.Classification = "Possível demência existente";
                    test.Color = "R";
                    reprovacao++;
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
                    reprovacao++;
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
                    reprovacao++;
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
                    reprovacao++;
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
                    reprovacao++;
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
                    reprovacao++;
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
                    reprovacao++;
                }
                else if (c.Total >= 3 && c.Total < 5)
                {
                    test.Classification = "Suspeita de demência";
                    test.Color = "Y";
                    reprovacao++;
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
            var testeSintomas = _uow.TesteSintomaRepository.Find(x => !x.IsDeleted && x.UserId == request.PatientId).ToList();
            // 1 - Alzheimer 1° estágio
            // 2 - Alzheimer 2° estágio
            // 3 - Alzheimer 3° estágio
            // 4 - Fronto
            // 5 - Lewy
            // 6 - Vascular
            // 7 - Parkinson
            int alzheimer1 = 0;
            int alzheimer2 = 0;
            int alzheimer3 = 0;
            int fronto = 0;
            int lewy51 = 0;
            int lewy52 = 0;
            int vascular = 0;
            int parkinson = 0;

            List<String> diagnostico = new List<String>();
            foreach (var teste in testeSintomas)
            {
                if (teste.Sintomas.Doenca1 == 1 || teste.Sintomas.Doenca2 == 1 || teste.Sintomas.Doenca3 == 1 || teste.Sintomas.Doenca4 == 1 || teste.Sintomas.Doenca5 == 1)
                    alzheimer1++;
                if (teste.Sintomas.Doenca1 == 2 || teste.Sintomas.Doenca2 == 2 || teste.Sintomas.Doenca3 == 2 || teste.Sintomas.Doenca4 == 2 || teste.Sintomas.Doenca5 == 2)
                    alzheimer2++;
                if (teste.Sintomas.Doenca1 == 3 || teste.Sintomas.Doenca2 == 3 || teste.Sintomas.Doenca3 == 3 || teste.Sintomas.Doenca4 == 3 || teste.Sintomas.Doenca5 == 3)
                    alzheimer3++;
                if (teste.Sintomas.Doenca1 == 4 || teste.Sintomas.Doenca2 == 4 || teste.Sintomas.Doenca3 == 4 || teste.Sintomas.Doenca4 == 4 || teste.Sintomas.Doenca5 == 4)
                    fronto++;
                if (teste.Sintomas.Doenca1 == 51 || teste.Sintomas.Doenca2 == 51 || teste.Sintomas.Doenca3 == 51 || teste.Sintomas.Doenca4 == 51 || teste.Sintomas.Doenca5 == 51)
                    lewy51++;
                if (teste.Sintomas.Doenca1 == 52 || teste.Sintomas.Doenca2 == 52 || teste.Sintomas.Doenca3 == 52 || teste.Sintomas.Doenca4 == 52 || teste.Sintomas.Doenca5 == 52)
                    lewy52++;
                if (teste.Sintomas.Doenca1 == 6 || teste.Sintomas.Doenca2 == 6 || teste.Sintomas.Doenca3 == 6 || teste.Sintomas.Doenca4 == 6 || teste.Sintomas.Doenca5 == 6)
                    vascular++;
                if (teste.Sintomas.Doenca1 == 7 || teste.Sintomas.Doenca2 == 7 || teste.Sintomas.Doenca3 == 7 || teste.Sintomas.Doenca4 == 7 || teste.Sintomas.Doenca5 == 7)
                    parkinson++;
            }


            if (alzheimer3 >= 1)
                diagnostico.Add("Transtorno Neurocognitivo Avançado - Doença de Alzheimer 3° Estagio");
            else if (alzheimer2 >= 2)
                diagnostico.Add("Transtorno Neurocognitivo Intermediário - Doença de Alzheimer 2° Estagio");
            else if (alzheimer1 >= 3)
                diagnostico.Add("Transtorno Neurocognitivo Leve - Doença de Alzheimer 1° Estagio");

            if (fronto >= 3)
                diagnostico.Add("Transtorno Neurocognitivo Maior ou Leve - Fronto temporal");

            if (lewy51 >= 2 && lewy52 >= 1)
                diagnostico.Add("Transtorno Neurocognitivo Maior - Corpos de Lewy");
            else if (lewy51 == 1 && lewy52 >= 1)
                diagnostico.Add("Transtorno Neurocognitivo Leve - Corpos de Lewy");

            if (vascular >= 4)
                diagnostico.Add("Transtorno Neurocognitivo Maior - Demência Vascular");
            else if (vascular >= 2)
                diagnostico.Add("Transtorno Neurocognitivo Leve - Demência Vascular");

            if (parkinson >= 4)
                diagnostico.Add("Transtorno Neurocognitivo Maior - Doença de Parkinson");
            else if (parkinson >= 2)
                diagnostico.Add("Transtorno Neurocognitivo Leve - Doença de Parkinson");

            if (diagnostico.Count() > 0 && reprovacao > 0)
                result.Diagnostico = "Com base nos testes aplicados e nos sintomas relatados, existe uma probabilidade do paciente ter: <h3>" + string.Join("<br>", diagnostico) + "</h3>";
            else
                result.Diagnostico = "Ops... O SIDD ainda não é capaz de informar um diagnóstico.";

            return result;
        }
    }
}
