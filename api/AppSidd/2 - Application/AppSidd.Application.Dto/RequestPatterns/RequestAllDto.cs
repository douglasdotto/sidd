using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Dto.Request
{
    public class RequestAllDto
    {
        public RequestAllDto()
        {
            Start = 0;
            PageSize = Int32.MaxValue;
            OrderBy = "Name";
            Desc = false;
            SearchTerm = "";
        }
        public int Start { get; set; }
        public int PageSize { get; set; }
        public string OrderBy { get; set; }
        public bool Desc { get; set; }
        public string SearchTerm { get; set; }
    }
}
