using AppSidd.Domain.Project;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppSidd.Infra.SqlServer.ModelBuilders
{
    internal class AcolhimentoConfiguration : IEntityTypeConfiguration<Acolhimento>
    {
        public void Configure(EntityTypeBuilder<Acolhimento> builder)
        {
            Ignores(builder);
            Relationships(builder);
            //builder.ToTable(nameof(User));
        }

        private static void Relationships(EntityTypeBuilder<Acolhimento> builder)
        {
        }

        private static void Ignores(EntityTypeBuilder<Acolhimento> builder)
        {
            builder.Ignore(entity => entity.IsValid);
        }
    }
}
