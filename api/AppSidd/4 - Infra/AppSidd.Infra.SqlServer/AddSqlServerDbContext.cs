using AppSidd.Domain.Users.Auth;
using AppSidd.Domain.Users.Auth.JWT;
using AppSidd.Infra.SqlServer;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class AddSqlServerDbContext
    {
        public static IServiceCollection AddSqlServerContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AppSiddServerContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString(SqlServerConsts.ConnectionString)
                    , opt => opt.MigrationsAssembly("Dashboard"))
            );

            services.AddIdentity<AppUser, AppRole>(options =>
            {
                options.Password.RequiredLength = 4;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireDigit = false;
            })
                .AddEntityFrameworkStores<AppSiddServerContext>()
                .AddDefaultTokenProviders();

            var signingConfigurations = new SigningConfigurations(configuration.GetSection("Authentication"));
            services.AddSingleton(signingConfigurations);

            var tokenConfigurations = new TokenConfigurations() { Days = 90 };
            new ConfigureFromConfigurationOptions<TokenConfigurations>(configuration.GetSection("Authentication")).Configure(tokenConfigurations);
            services.AddSingleton(tokenConfigurations);

            services.AddAuthentication(options =>
            {
                options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            }).AddCookie(options =>
            {
                options.AccessDeniedPath = new PathString("/Dashboard/Error");
                options.LoginPath = new PathString("/signin");
            }).AddJwtBearer(bearerOptions =>
            {
                var paramsValidation = bearerOptions.TokenValidationParameters;
                paramsValidation.IssuerSigningKey = signingConfigurations.Key;
                paramsValidation.ValidAudience = tokenConfigurations.Audience;
                paramsValidation.ValidIssuer = tokenConfigurations.Issuer;
                paramsValidation.ValidateIssuerSigningKey = true;
                paramsValidation.ValidateLifetime = true;
                paramsValidation.ClockSkew = TimeSpan.Zero;
                paramsValidation.SaveSigninToken = true;
                bearerOptions.SaveToken = true;
            });

            services.AddAuthorization(auth =>
            {
                auth.AddPolicy(Polices.POLICE_PROGRAM, new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(CookieAuthenticationDefaults.AuthenticationScheme)
                    .RequireRole(Roles.ROLE_ADMIN)
                    .RequireAuthenticatedUser().Build());
            });

            return services;
        }
    }
}