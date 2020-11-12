using AppSidd.Domain.Project;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppSidd.Infra.SqlServer.ModelBuilders
{
    internal class TesteSintomaConfiguration : IEntityTypeConfiguration<TesteSintoma>
    {
        public void Configure(EntityTypeBuilder<TesteSintoma> builder)
        {
            Ignores(builder);
            Relationships(builder);
            //builder.ToTable(nameof(User));
        }

        private static void Relationships(EntityTypeBuilder<TesteSintoma> builder)
        {
        }

        private static void Ignores(EntityTypeBuilder<TesteSintoma> builder)
        {
            builder.Ignore(entity => entity.IsValid);
        }
    }
}
