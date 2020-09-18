using AppSidd.Domain.Users.Auth;
using AppSidd.Infra.SqlServer.Interfaces;
using AppSidd.Infra.SqlServer.ModelBuilders;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace AppSidd.Infra.SqlServer
{
    public class AppSiddServerContext : IdentityDbContext<AppUser>
        , IDbContext, IDisposable
    {
        public AppSiddServerContext(DbContextOptions<AppSiddServerContext> options) : base(options)
        {
        }

        protected AppSiddServerContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new AppUserConfiguration());
            modelBuilder.ApplyConfiguration(new AppRoleConfiguration());
        }

        public async Task<int> SaveChangesAsync()
            => await base.SaveChangesAsync();
    }
}
