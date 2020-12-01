using static AppSidd.Domain.Project.GDSFactory;

namespace AppSidd.Domain.Project.Interfaces.Factory
{
    public interface IGDSFactory
    {
        GDSBuilder DefaultBuilder();
    }
}
