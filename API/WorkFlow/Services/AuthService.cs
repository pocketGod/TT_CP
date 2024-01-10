using GYM_MODELS.Settings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TT_CP.API.Entites.Auth;

namespace TT_CP.API.WorkFlow.Services
{
    public class AuthService {

        private readonly JwtSettings _jwtSettings;

        public AuthService(IOptions<JwtSettings> jwtSettings)
        {
            _jwtSettings = jwtSettings.Value;
        }
        public string Authenticate(SiteLoginRequest request)
        {
            if (IsValidSitePass(request.sitePass))
            {
                return GenerateJwtToken();
            }

            return string.Empty;
        }

        private string GenerateJwtToken()
        {
            JwtSecurityTokenHandler tokenHandler = new();
            byte[] key = Encoding.ASCII.GetBytes(_jwtSettings.SecretKey);
            SecurityTokenDescriptor tokenDescriptor = new ()
            {
                Subject = new ClaimsIdentity(new[] { new Claim("name", _jwtSettings.SecretKey) }),
                Expires = DateTime.UtcNow.AddMinutes(_jwtSettings.TokenExpirationMinutes),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            SecurityToken? token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        private bool IsValidSitePass(string sitePass)
        {
            return sitePass == _jwtSettings.SitePass;
        }
    }
}
