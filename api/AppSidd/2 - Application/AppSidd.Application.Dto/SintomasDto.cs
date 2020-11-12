using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Application.Dto
{
    public class SintomasDto
    {
        public Guid? SintomasId { get; set; }
        public string Descricao { get; set; }
        public int? Doenca1 { get; set; }
        public int? Doenca2 { get; set; }
        public int? Doenca3 { get; set; }
        public int? Doenca4 { get; set; }
        public int? Doenca5 { get; set; }
        public DateTime? Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
