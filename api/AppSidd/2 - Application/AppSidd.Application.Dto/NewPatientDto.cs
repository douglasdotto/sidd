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
        public string TempoDeEstudo { get; set; }
        public string EstadoCivil { get; set; }
        public string Raca { get; set; }
        public string ResideCom { get; set; }
        public string PossuiCuidador { get; set; }
    }
}
