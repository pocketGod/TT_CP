using GYM_MODELS.Settings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using TT_CP.API.Entites.Auth;
using TT_CP.API.WorkFlow.Services;

namespace TT_CP.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public ActionResult<object> Login([FromBody] SiteLoginRequest request)
        {
            string token = _authService.Authenticate(request);
            if (string.IsNullOrEmpty(token))
                return Unauthorized();

            return Ok(new { token });
        }




    }
}
