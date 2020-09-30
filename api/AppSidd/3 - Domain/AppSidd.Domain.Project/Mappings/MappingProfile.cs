﻿using AppSidd.Application.Dto;
using AppSidd.Domain.Project;
using AutoMapper;

namespace AppSidd.Domain.Mapper
{
    public class ApplicationMappingProfile : Profile
    {
        public ApplicationMappingProfile()
        {
            CreateMap<Unity, UnityDto>();
        }
    }
}
