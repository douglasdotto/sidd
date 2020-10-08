using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Notifications;
using AppSidd.Domain.Project;
using AppSidd.Infra.Repositories.Interfaces;
using AppSidd.Infra.SqlServer.Interfaces;
using System;
using System.Threading.Tasks;

namespace AppSidd.Infra.Repositories.Repositories
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly INotificationHandler _notificationHandler;
        private readonly IDbContext _context;

        public UnitOfWork(IDbContext context
            , INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
            _context = context;

            UnityRepository = new Repository<Unity>(context);
            PfefferRepository = new Repository<Pfeffer>(context);
            CDRRepository = new Repository<CDR>(context);
            MoCARepository = new Repository<MoCA>(context);
            MEEMRepository = new Repository<MEEM>(context);
        }

        public IRepository<Unity> UnityRepository { get; }
        public IRepository<Pfeffer> PfefferRepository { get; }
        public IRepository<CDR> CDRRepository { get; }
        public IRepository<MoCA> MoCARepository { get; }
        public IRepository<MEEM> MEEMRepository { get; }

        public void Dispose()
            => _context.Dispose();

        public async Task Save()
            => await _context.SaveChangesAsync();
    }
}
