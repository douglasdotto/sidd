using AppSidd.Domain.Project;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppSidd.Infra.SqlServer.ModelBuilders
{
    internal class MoCAConfiguration : IEntityTypeConfiguration<MoCA>
    {
        public void Configure(EntityTypeBuilder<MoCA> builder)
        {
            Ignores(builder);
            Relationships(builder);
            //builder.ToTable(nameof(User));
        }

        private static void Relationships(EntityTypeBuilder<MoCA> builder)
        {
        }

        private static void Ignores(EntityTypeBuilder<MoCA> builder)
        {
            builder.Ignore(entity => entity.IsValid);
        }
    }
}
