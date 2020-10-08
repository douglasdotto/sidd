using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Application.Dto
{
    public class CDRDto
    {
        public string CDRId { get; set; }
        public string UserId { get; set; }
        public decimal Question1 { get; set; }
        public decimal Question2 { get; set; }
        public decimal Question3 { get; set; }
        public decimal Question4 { get; set; }
        public decimal Question5 { get; set; }
        public decimal Question6 { get; set; }
        public decimal Total { get; set; }
        public DateTime? Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
