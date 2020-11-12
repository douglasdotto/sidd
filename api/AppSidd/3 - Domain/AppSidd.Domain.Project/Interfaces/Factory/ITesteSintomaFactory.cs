using static AppSidd.Domain.Project.TesteSintomaFactory;

namespace AppSidd.Domain.Project.Interfaces.Factory
{
    public interface ITesteSintomaFactory
    {
        TesteSintomaBuilder DefaultBuilder();
    }
}
