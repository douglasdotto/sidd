using AppSidd.Domain.Project;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppSidd.Infra.SqlServer.ModelBuilders
{
    internal class MEEMConfiguration : IEntityTypeConfiguration<MEEM>
    {
        public void Configure(EntityTypeBuilder<MEEM> builder)
        {
            Ignores(builder);
            Relationships(builder);
            //builder.ToTable(nameof(User));
        }

        private static void Relationships(EntityTypeBuilder<MEEM> builder)
        {
        }

        private static void Ignores(EntityTypeBuilder<MEEM> builder)
        {
            builder.Ignore(entity => entity.IsValid);
        }
    }
}
