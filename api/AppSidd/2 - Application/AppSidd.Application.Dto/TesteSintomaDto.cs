using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Application.Dto
{
    public class TesteSintomaDto
    {
        public Guid? TesteSintomaId { get; set; }
        public string Descricao { get; set; }
        public Guid? SintomasId { get; set; }
        public DateTime? Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
