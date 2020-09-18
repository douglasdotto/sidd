using AutoMapper;
using AppSidd.Application.Dto;
using AppSidd.Domain.Users;
using AppSidd.Domain.Users.Auth;

namespace AppSidd.Domain.Mapper
{
    public class ApplicationMappingProfile : Profile
    {
        public ApplicationMappingProfile()
        {
            CreateMap<AppUser, UserDto>();
        }
    }
}
