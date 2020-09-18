using AppSidd.Domain.Interfaces.Write;
using AppSidd.Domain.Notifications;
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

            //GTRepository = new Repository<GT>(context);
        }
        //public IRepository<GT> GTRepository { get; }
        public void Dispose()
            => _context.Dispose();

        public async Task Save()
            => await _context.SaveChangesAsync();
    }
}
