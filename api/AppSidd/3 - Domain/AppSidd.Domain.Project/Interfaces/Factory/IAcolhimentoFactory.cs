using static AppSidd.Domain.Project.AcolhimentoFactory;

namespace AppSidd.Domain.Project.Interfaces.Factory
{
    public interface IAcolhimentoFactory
    {
        AcolhimentoBuilder DefaultBuilder();
    }
}
