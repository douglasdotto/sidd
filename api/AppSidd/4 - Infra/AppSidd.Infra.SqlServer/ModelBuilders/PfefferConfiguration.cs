using AppSidd.Domain.Project;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppSidd.Infra.SqlServer.ModelBuilders
{
    internal class PfefferConfiguration : IEntityTypeConfiguration<Pfeffer>
    {
        public void Configure(EntityTypeBuilder<Pfeffer> builder)
        {
            Ignores(builder);
            Relationships(builder);
            //builder.ToTable(nameof(User));
        }

        private static void Relationships(EntityTypeBuilder<Pfeffer> builder)
        {
        }

        private static void Ignores(EntityTypeBuilder<Pfeffer> builder)
        {
            builder.Ignore(entity => entity.IsValid);
        }
    }
}
