using AppSidd.Domain.Project;
using AppSidd.Infra.Repositories.Interfaces;
using System.Threading.Tasks;

namespace AppSidd.Domain.Interfaces.Write
{
    public interface IUnitOfWork
    {
        IRepository<Unity> UnityRepository { get; }
        IRepository<Acolhimento> AcolhimentoRepository { get; }
        IRepository<Pfeffer> PfefferRepository { get; }
        IRepository<GDS> GDSRepository { get; }
        IRepository<CDR> CDRRepository { get; }
        IRepository<MoCA> MoCARepository { get; }
        IRepository<MEEM> MEEMRepository { get; }
        IRepository<Sintomas> SintomasRepository { get; }
        IRepository<TesteSintoma> TesteSintomaRepository { get; }

        Task Save();
    }
}
