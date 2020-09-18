using AppSidd.Domain.Notifications;
using AppSidd.Domain.Users.Auth;
using AppSidd.Domain.Users.Auth.JWT;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppSidd.Infra.SqlServer.ModelBuilders
{
    internal class AppRoleConfiguration : IEntityTypeConfiguration<AppRole>
    {
        public void Configure(EntityTypeBuilder<AppRole> builder)
        {
            Ignores(builder);
            Relationships(builder);
            Seed(builder);
        }

        private static void Relationships(EntityTypeBuilder<AppRole> builder)
        {
            builder.HasMany(entity => entity.AppUserRoles)
                   .WithOne(relationship => relationship.AppRole)
                   .HasForeignKey(ur => ur.RoleId)
                   .IsRequired()
                   .OnDelete(DeleteBehavior.Restrict);
        }

        private static void Seed(EntityTypeBuilder<AppRole> builder)
        {
            var appRoleFactory = new AppRoleFactory(new NotificationHandler());

            builder.HasData(
                appRoleFactory.DefaultBuilder()
                            .WithName(Roles.ROLE_ADMIN_CREATE.Name)
                            .WithNormalizedName(Roles.ROLE_ADMIN_CREATE.Name.ToUpper())
                            .WithId(Roles.ROLE_ADMIN_CREATE.Id)
                            .Raise(),
                appRoleFactory.DefaultBuilder()
                            .WithName(Roles.ROLE_AGENT_CREATE.Name)
                            .WithNormalizedName(Roles.ROLE_AGENT_CREATE.Name.ToUpper())
                            .WithId(Roles.ROLE_AGENT_CREATE.Id)
                            .Raise(),
                appRoleFactory.DefaultBuilder()
                            .WithName(Roles.ROLE_ENF_CREATE.Name)
                            .WithNormalizedName(Roles.ROLE_ENF_CREATE.Name.ToUpper())
                            .WithId(Roles.ROLE_ENF_CREATE.Id)
                            .Raise(),
                appRoleFactory.DefaultBuilder()
                            .WithName(Roles.ROLE_MEDIC_CREATE.Name)
                            .WithNormalizedName(Roles.ROLE_MEDIC_CREATE.Name.ToUpper())
                            .WithId(Roles.ROLE_MEDIC_CREATE.Id)
                            .Raise(),
                appRoleFactory.DefaultBuilder()
                            .WithName(Roles.ROLE_TEC_CREATE.Name)
                            .WithNormalizedName(Roles.ROLE_TEC_CREATE.Name.ToUpper())
                            .WithId(Roles.ROLE_TEC_CREATE.Id)
                            .Raise(),
                appRoleFactory.DefaultBuilder()
                            .WithName(Roles.ROLE_PATIENT_CREATE.Name)
                            .WithNormalizedName(Roles.ROLE_PATIENT_CREATE.Name.ToUpper())
                            .WithId(Roles.ROLE_PATIENT_CREATE.Id)
                            .Raise()
                );
        }

        private static void Ignores(EntityTypeBuilder<AppRole> builder)
        {
            builder.Ignore(entity => entity.IsValid);
        }
    }
}
