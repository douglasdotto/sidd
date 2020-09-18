using System.Net;

namespace AppSidd.Dto.Response
{
    public class OkDto
    {
        public OkDto(object response)
        {
            Response = response;
        }

        public object Response { get; private set; }
        public HttpStatusCode StatusCode => HttpStatusCode.OK;
    }
}
