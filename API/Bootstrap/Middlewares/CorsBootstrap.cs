namespace TT_CP.API.Bootstrap.Middlewares
{
    public static class CorsBootstrap
    {
        public static void Initialize(IServiceCollection services)
        {

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {
                        builder.WithOrigins("https://localhost:44498") // Client app's URL
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });

        }
    }
}
