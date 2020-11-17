using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Application.Dto
{
    public class UserDto
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Sexo { get; set; }
        public int? Idade { get; set; }
        public DateTime? IdadeData { get; set; }
        public int TempoDeEstudo { get; set; }
        public string EstadoCivil { get; set; }
        public string Trabalho { get; set; }
        public string CPF { get; set; }
        public string RG { get; set; }
        public string SUS { get; set; }
        public string COREN { get; set; }
        public Guid? UnityId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Diagnostico { get; set; }
        public int? TotalTests { get; set; }
        public List<TestsDto> Tests { get; set; }
        public List<AcolhimentoDto> Acolhimento { get; set; }
        public List<RoleDto> Roles { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? LastLogin { get; set; }
        public bool? IsActive { get; set; }
    }
}
