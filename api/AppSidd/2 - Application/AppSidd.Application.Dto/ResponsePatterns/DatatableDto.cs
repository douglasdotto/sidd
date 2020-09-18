using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Dto.Response
{
    public class DatatableDto
    {
        public object Data { get; private set; }
        public int Draw { get; private set; }
        public int RecordsTotal { get; private set; }
        public int RecordsFiltered { get; private set; }

        public DatatableDto(object data, int draw, int recordsTotal, int recordsFiltered)
        {
            Draw = draw;
            RecordsTotal = recordsTotal;
            RecordsFiltered = recordsFiltered;
            Data = data;
        }
    }
}
