using AppSidd.Domain.Project;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppSidd.Infra.SqlServer.ModelBuilders
{
    internal class UnityConfiguration : IEntityTypeConfiguration<Unity>
    {
        public void Configure(EntityTypeBuilder<Unity> builder)
        {
            Ignores(builder);
            Relationships(builder);
            //builder.ToTable(nameof(User));
        }

        private static void Relationships(EntityTypeBuilder<Unity> builder)
        {
        }

        private static void Ignores(EntityTypeBuilder<Unity> builder)
        {
            builder.Ignore(entity => entity.IsValid);
        }
    }
}
