using static AppSidd.Domain.Project.UnityFactory;

namespace AppSidd.Domain.Project.Interfaces.Factory
{
    public interface IUnityFactory
    {
        UnityBuilder DefaultBuilder();
    }
}
