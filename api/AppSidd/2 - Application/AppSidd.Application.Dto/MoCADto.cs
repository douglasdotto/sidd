using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Application.Dto
{
    public class MoCADto
    {
        public string MoCAId { get; set; }
        public string UserId { get; set; }
        public int Question1 { get; set; }
        public int Question2 { get; set; }
        public int Question3 { get; set; }
        public int Question4 { get; set; }
        public int Question5 { get; set; }
        public int Question6 { get; set; }
        public int Question7 { get; set; }
        public int Question8 { get; set; }
        public int Question9 { get; set; }
        public int Question10 { get; set; }
        public int Total { get; set; }
        public DateTime? Created { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? Updated { get; set; }
        public string UpdatedBy { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
