using GYM_MODELS.Settings;
using Microsoft.Extensions.Configuration;
using TT_CP.API.WorkFlow.Managers;
using TT_CP.API.WorkFlow.Services;
using TT_CP.API.WorkFlow.Utils;

namespace TT_CP.API.Bootstrap.WF
{
    public static class ServicesBootstrap
    {
        public static void Initialize(IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<JwtSettings>(configuration.GetSection("JwtSettings"));
            services.AddScoped<AuthService>();
            services.AddMemoryCache();
            services.AddScoped<ICachingHelper, CachingHelper>();
            services.AddScoped<IItemService, ItemService>();
            services.AddScoped<IContentService, ContentService>();
            services.AddScoped<IMediaService, MediaService>();


            services.AddScoped<ContentManager>();
        }
    }
}
