using AppSidd.Domain.Project;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppSidd.Infra.SqlServer.ModelBuilders
{
    internal class SintomasConfiguration : IEntityTypeConfiguration<Sintomas>
    {
        public void Configure(EntityTypeBuilder<Sintomas> builder)
        {
            Ignores(builder);
            Relationships(builder);
            //builder.ToTable(nameof(User));
        }

        private static void Relationships(EntityTypeBuilder<Sintomas> builder)
        {
        }

        private static void Ignores(EntityTypeBuilder<Sintomas> builder)
        {
            builder.Ignore(entity => entity.IsValid);
        }
    }
}
