using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Application.Dto
{
    public class AcolhimentoDto
    {
        public string AcolhimentoId { get; set; }
        public string UserId { get; set; }
        public string FrequenciaCardiaca { get; set; }
        public string Saturação { get; set; }
        public string PressaoArterial { get; set; }
        public string Glicemia { get; set; }
        public string Sintomas { get; set; }
        public string Medicamentos { get; set; }
        public string Observacoes { get; set; }
        public DateTime? Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
