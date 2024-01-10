using GYM_MODELS.Settings;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace TT_CP.API.Bootstrap.Middlewares
{
    public static class MiddlewareBootstrap
    {
        public static void Initialize(IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<JwtSettings>(configuration.GetSection("JwtSettings"));
        }

        public static void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            var jwtSettings = app.ApplicationServices.GetRequiredService<IOptions<JwtSettings>>().Value;
            app.UseMiddleware<JwtMiddleware>(jwtSettings);

        }
    }
}
