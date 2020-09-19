using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace AppSidd.Infra.SqlServer.Context
{
    public class AppSiddContextFactory : IDesignTimeDbContextFactory<AppSiddServerContext>
    {
        public AppSiddServerContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AppSiddServerContext>();
            optionsBuilder.UseSqlServer(@"Server=tcp:appsidd.database.windows.net,1433;Initial Catalog=AppSidd;Persist Security Info=False;User ID=appsidd;Password=sidd#$123;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            return new AppSiddServerContext(optionsBuilder.Options);
        }
    }
}
