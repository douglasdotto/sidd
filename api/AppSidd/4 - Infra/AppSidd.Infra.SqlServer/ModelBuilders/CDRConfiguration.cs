using AppSidd.Domain.Project;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppSidd.Infra.SqlServer.ModelBuilders
{
    internal class CDRConfiguration : IEntityTypeConfiguration<CDR>
    {
        public void Configure(EntityTypeBuilder<CDR> builder)
        {
            Ignores(builder);
            Relationships(builder);
            //builder.ToTable(nameof(User));
        }

        private static void Relationships(EntityTypeBuilder<CDR> builder)
        {
        }

        private static void Ignores(EntityTypeBuilder<CDR> builder)
        {
            builder.Ignore(entity => entity.IsValid);
        }
    }
}
