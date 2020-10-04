using static AppSidd.Domain.Project.PfefferFactory;

namespace AppSidd.Domain.Project.Interfaces.Factory
{
    public interface IPfefferFactory
    {
        PfefferBuilder DefaultBuilder();
    }
}
