using AppSidd.Application.Dto;
using AppSidd.Domain.Project;
using AutoMapper;

namespace AppSidd.Domain.Mapper
{
    public class ApplicationMappingProfile : Profile
    {
        public ApplicationMappingProfile()
        {
            CreateMap<Unity, UnityDto>();
            CreateMap<Pfeffer, PfefferDto>();
            CreateMap<CDR, CDRDto>();
            CreateMap<MEEM, MEEMDto>();
            CreateMap<MoCA, MoCADto>();
            CreateMap<Acolhimento, AcolhimentoDto>();
            CreateMap<Sintomas, SintomasDto>();
            CreateMap<TesteSintoma, TesteSintomaDto>();
        }
    }
}
