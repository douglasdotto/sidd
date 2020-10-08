using static AppSidd.Domain.Project.MoCAFactory;

namespace AppSidd.Domain.Project.Interfaces.Factory
{
    public interface IMoCAFactory
    {
        MoCABuilder DefaultBuilder();
    }
}
