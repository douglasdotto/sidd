using AppSidd.Domain.Project;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppSidd.Infra.SqlServer.ModelBuilders
{
    internal class GDSConfiguration : IEntityTypeConfiguration<GDS>
    {
        public void Configure(EntityTypeBuilder<GDS> builder)
        {
            Ignores(builder);
            Relationships(builder);
            //builder.ToTable(nameof(User));
        }

        private static void Relationships(EntityTypeBuilder<GDS> builder)
        {
        }

        private static void Ignores(EntityTypeBuilder<GDS> builder)
        {
            builder.Ignore(entity => entity.IsValid);
        }
    }
}
