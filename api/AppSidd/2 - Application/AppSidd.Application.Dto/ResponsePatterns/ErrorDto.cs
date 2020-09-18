using System;

namespace AppSidd.Dto.Response
{
    public class ErrorDto
    {
        public string Message { get; set; }
        public Exception InternalError { get; set; }
    }
}