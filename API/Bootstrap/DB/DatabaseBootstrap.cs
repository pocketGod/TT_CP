using MongoDB.Driver;
using TT_CP.API.Entites.Settings;

namespace TT_CP.API.Bootstrap.DB
{
    public static class DatabaseBootstrap
    {
        public static void Initialize(IServiceCollection services, IConfiguration configuration)
        {
            MongoDBSettings? mongoDbSettings = configuration.GetSection("MongoDB").Get<MongoDBSettings>();
            services.AddSingleton<IMongoClient>(serviceProvider => new MongoClient(mongoDbSettings.ConnectionString));
            services.AddSingleton(serviceProvider => serviceProvider.GetRequiredService<IMongoClient>().GetDatabase(mongoDbSettings.DatabaseName_Content));
            services.AddSingleton(serviceProvider => serviceProvider.GetRequiredService<IMongoClient>().GetDatabase(mongoDbSettings.DatabaseName_Data));

            DatabaseModelsBsonMapper.Initialize();
            RepositoryBootstrap.Initialize(services, configuration);
        }
    }
}
