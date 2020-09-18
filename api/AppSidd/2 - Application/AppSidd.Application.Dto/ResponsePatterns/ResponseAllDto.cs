using System;
using System.Collections.Generic;
using System.Text;

namespace AppSidd.Dto.ResponsePatterns
{
    public class ResponseAllDto<T>
    {
        public T Data { get; set; }
        public int RecordsTotal { get; set; }
        public int RecordsFiltered { get; set; }

        public ResponseAllDto(T data, int recordsTotal, int recoredFiltered)
        {
            Data = data;
            RecordsTotal = recordsTotal;
            RecordsFiltered = recoredFiltered;
        }
    }
}
