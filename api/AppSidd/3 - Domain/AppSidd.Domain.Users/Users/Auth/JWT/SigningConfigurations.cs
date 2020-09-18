using System.Security.Cryptography;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace AppSidd.Domain.Users.Auth.JWT
{
    public class SigningConfigurations
    {
        public SecurityKey Key { get; }
        public SigningCredentials SigningCredentials { get; }

        private string _JWT;

        public SigningConfigurations(IConfiguration configuration)
        {
            _JWT = configuration["JWTIssuerSigningKey"];
            Key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_JWT));
            SigningCredentials = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);
        }
    }
}