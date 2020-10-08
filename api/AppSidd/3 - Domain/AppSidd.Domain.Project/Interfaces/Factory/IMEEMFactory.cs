using static AppSidd.Domain.Project.MEEMFactory;

namespace AppSidd.Domain.Project.Interfaces.Factory
{
    public interface IMEEMFactory
    {
        MEEMBuilder DefaultBuilder();
    }
}
