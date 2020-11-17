using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Application.Dto
{
    public class NewPatientDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Sexo { get; set; }
        public string IdadeData { get; set; }
        public int TempoDeEstudo { get; set; }
        public string EstadoCivil { get; set; }
        public string Trabalho { get; set; }
    }
}
