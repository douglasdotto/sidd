using static AppSidd.Domain.Project.SintomasFactory;

namespace AppSidd.Domain.Project.Interfaces.Factory
{
    public interface ISintomasFactory
    {
        SintomasBuilder DefaultBuilder();
    }
}
