
using MongoDB.Driver;
using TT_CP.API.Repository.Repositories;

namespace TT_CP.API.Bootstrap.DB
{
    public static class RepositoryBootstrap
    {
        public static void Initialize(IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IContentRepository>(serviceProvider =>
            {
                var database = serviceProvider.GetRequiredService<IMongoClient>().GetDatabase(configuration["MongoDB:DatabaseName_Content"]);
                return new ContentRepository(database);
            });

            services.AddScoped<IItemsRepository>(serviceProvider =>
            {
                var database = serviceProvider.GetRequiredService<IMongoClient>().GetDatabase(configuration["MongoDB:DatabaseName_Data"]);
                return new ItemRepository(database);
            });
        }
    }
}
