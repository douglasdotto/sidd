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
            bool reprovap = false;
            bool reprovam = false;

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
            var gds = _uow.GDSRepository.Find(x => !x.IsDeleted && x.UserId == request.PatientId).ToList();
            foreach (var c in gds)
            {
                TestsDto test = new TestsDto
                {
                    Type = "GDS",
                    TotalPoints = c.Total.ToString("N2"),
                    Date = c.Created
                };
                if (c.Total <= 5)
                {
                    test.Classification = "Quadro psicológico normal";
                    test.Color = "G";
                }
                else if (c.Total > 5 && c.Total <= 10)
                {
                    test.Classification = "Quadro de depressão leve";
                    test.Color = "Y";
                    reprovacao++;
                }
                else
                {
                    test.Classification = "Quadro de depressão severa";
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
                    reprovam = true;
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
                    reprovam = true;
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
                    reprovam = true;
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
                    reprovam = true;
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
                    reprovap = true;
                }
                else if (c.Total >= 3 && c.Total < 5)
                {
                    test.Classification = "Suspeita de demência";
                    test.Color = "Y";
                    reprovacao++;
                    reprovap = true;
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
            var testeSintomas = _uow.TesteSintomaRepository.Find(x => !x.IsDeleted && x.UserId == request.PatientId).Distinct().ToList();

            int d1 = 0;
            int d2 = 0;
            int d3 = 0;
            int d4 = 0;
            int d5 = 0;
            int d6 = 0;
            int d7 = 0;

            List<string> diagnostico = new List<string>();
            foreach (var teste in testeSintomas)
            {
                if (teste.Sintomas.Doenca1 == 11 || teste.Sintomas.Doenca1 == 12)
                    d1++;
                if (teste.Sintomas.Doenca1 == 21 || teste.Sintomas.Doenca1 == 22)
                    d2++;
                if (teste.Sintomas.Doenca1 == 31 || teste.Sintomas.Doenca1 == 32)
                    d3++;
                if (teste.Sintomas.Doenca1 == 41 || teste.Sintomas.Doenca1 == 42)
                    d4++;
                if (teste.Sintomas.Doenca1 == 51 || teste.Sintomas.Doenca1 == 52)
                    d5++;
                if (teste.Sintomas.Doenca1 == 61 || teste.Sintomas.Doenca1 == 62)
                    d6++;
                if (teste.Sintomas.Doenca1 == 71)
                    d1++;
            }

            bool reprovad1 = false;
            if (d1 >= 3)
                reprovad1 = true;

            bool reprovad2 = false;
            if (d2 >= 3)
                reprovad2 = true;

            bool reprovad3 = false;
            if (d3 >= 4)
                reprovad3 = true;

            bool reprovad4 = false;
            if (d4 >= 3)
                reprovad4 = true;

            bool reprovad5 = false;
            if (d5 >= 3)
                reprovad5 = true;

            bool reprovad6 = false;
            if (d6 >= 4)
                reprovad6 = true;


            if ((reprovad1 || reprovad3 || reprovad3 || reprovad4 || reprovad5 || reprovad6) && reprovam && reprovap)
            {
                var ausenciaAVC = testeSintomas.Find(x => x.SintomasId == new Guid("28FFDB0C-063B-4504-AC9E-51F323AA3414")) != null ? true : false;

                //ALZHEIMER
                var possuihistoricoalzheimer = testeSintomas.Find(x => x.SintomasId == new Guid("F70C1E56-3B44-4605-BDBF-AADA40285FC8")) != null ? true : false;
                if (reprovad3 && ausenciaAVC && possuihistoricoalzheimer)
                    diagnostico.Add("Provável - Transtorno Neurocognitivo - Doença de Alzheimer");
                else if (reprovad3)
                    diagnostico.Add("Possível - Transtorno Neurocognitivo - Doença de Alzheimer");

                //FRONTO
                var menorempatia = testeSintomas.Find(x => x.SintomasId == new Guid("04DF6E4C-3D9C-42A5-8F66-E3E687901424")) != null ? true : false;
                var apatiainquietacao = testeSintomas.Find(x => x.SintomasId == new Guid("2A171EFC-115D-4DFB-8E73-8BD667F0181D")) != null ? true : false;
                var comportamental = testeSintomas.FindAll(x => x.SintomasId == new Guid("8B99A5CE-0C72-4F87-B94E-2D2B6B24A206")
                                                            || x.SintomasId == new Guid("D7F66D83-A5B9-4039-8160-436F1E3DE548")
                                                            || x.SintomasId == new Guid("311DEB88-80C7-4EC0-BB6A-ECAB9C4CF7B0")
                                                            || x.SintomasId == new Guid("938DA4A1-D269-4E41-8F2E-F0756F731BD9")).Count >= 0 ? true : false;
                var linguistica = testeSintomas.Find(x => x.SintomasId == new Guid("C5BE547B-DBDA-4101-A49E-4CD02FD8ED17")) != null ? true : false;
                if (reprovad3 && reprovad4 && ausenciaAVC && menorempatia && apatiainquietacao && (comportamental || linguistica))
                    diagnostico.Add("Provável - Transtorno Neurocognitivo - Fronto temporal");
                else if (reprovad3 && reprovad4 && menorempatia && apatiainquietacao)
                    diagnostico.Add("Possível - Transtorno Neurocognitivo - Fronto temporal");

                //LEWY
                var sugestivas = testeSintomas.FindAll(x => x.SintomasId == new Guid("7867E85D-983A-48EC-8307-449B5D0CCE6F")
                                                        || x.SintomasId == new Guid("A8DC16F1-CA4C-401D-B533-117C83129538")
                                                        || x.SintomasId == new Guid("4DB737AA-A74C-4EA7-8F0B-AE4C69089975")
                                                        || x.SintomasId == new Guid("FA2B0E38-AE4D-42FF-AB5E-EDB96F54FD58")).Count();
                var centrais = testeSintomas.FindAll(x => x.SintomasId == new Guid("2E800AA6-AA4B-4652-BD21-997895599DD0")
                                                        || x.SintomasId == new Guid("932F8732-649A-437C-8055-8E73BEDA31A1")
                                                        || x.SintomasId == new Guid("5DABBBAA-558D-4CB0-AE4B-75F88221C2BF")).Count();

                if (ausenciaAVC && centrais >= 2 && sugestivas >= 1 && ausenciaAVC)
                    diagnostico.Add("Provável - Transtorno Neurocognitivo - Corpos de Lewy");
                else if (centrais >= 1 && sugestivas >= 1)
                    diagnostico.Add("Possível - Transtorno Neurocognitivo - Corpos de Lewy");

                // VASCULAR
                var exameneuroimagem = testeSintomas.Find(x => x.SintomasId == new Guid("E8D18045-F953-4CE7-8F74-618AE3E66A01")) != null ? true : false;
                if (reprovad1 && reprovad2 && exameneuroimagem && !ausenciaAVC)
                    diagnostico.Add("Provável - Transtorno Neurocognitivo - Demência Vascular");
                else if (reprovad1 && reprovad2 && !ausenciaAVC)
                    diagnostico.Add("Possível - Transtorno Neurocognitivo - Demência Vascular");

                // PARK
                var parks = testeSintomas.FindAll(x => x.SintomasId == new Guid("7867E85D-983A-48EC-8307-449B5D0CCE6F")
                                            || x.SintomasId == new Guid("72C22197-B16B-4F13-8B59-42BA8DB0E5E3")
                                            || x.SintomasId == new Guid("F55A1A78-4567-463E-A7E5-C9C16650695A")
                                            || x.SintomasId == new Guid("D8B01DE4-6982-45EB-B231-4F405E417CA6")
                                            || x.SintomasId == new Guid("8252137C-79A4-42DC-95F5-CC1CB20CAA54")).Count >= 2 ? true : false;
                if (reprovad6 && parks && ausenciaAVC)
                    diagnostico.Add("Provável - Transtorno Neurocognitivo - Doença de Parkinson");
                else if (reprovad6)
                    diagnostico.Add("Possível - Transtorno Neurocognitivo - Doença de Parkinson");
            }

            if (diagnostico.Count() > 0 && reprovacao > 0)
                result.Diagnostico = "Com base nos testes aplicados e nos sintomas relatados, nossa sugestão é de que o paciente tenha: <h3 class='text-warning'>" + string.Join("<br>", diagnostico) + "</h3>";
            else
                result.Diagnostico = "Ops... O SIDD ainda tem dados o suficiente para sugerir um diagnóstico.";

            return result;
        }
    }
}
