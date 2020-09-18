using System.Collections.Generic;

namespace AppSidd.Dto.Response
{
    public class ListResponseDto<T>
    {
        public List<T> Items { get; set; }
        public bool HasNextPage { get; set; }
        public int Count { get; set; }
        public ListResponseDto()
        {
            Items = new List<T>();
        }
    }
}