using static AppSidd.Domain.Project.CDRFactory;

namespace AppSidd.Domain.Project.Interfaces.Factory
{
    public interface ICDRFactory
    {
        CDRBuilder DefaultBuilder();
    }
}
