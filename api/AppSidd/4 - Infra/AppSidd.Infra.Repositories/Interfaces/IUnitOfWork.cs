using AppSidd.Infra.Repositories.Interfaces;
using System.Threading.Tasks;

namespace AppSidd.Domain.Interfaces.Write
{
    public interface IUnitOfWork
    {
        //IRepository<GT> GTRepository { get; }

        Task Save();
    }
}
