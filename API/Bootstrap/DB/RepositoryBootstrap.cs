
using MongoDB.Driver;
using TT_CP.API.Repository.Repositories;

namespace TT_CP.API.Bootstrap.DB
{
    public static class RepositoryBootstrap
    {
        public static void Initialize(IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IDictionaryRepository>(serviceProvider =>
            {
                var database = serviceProvider.GetRequiredService<IMongoClient>().GetDatabase(configuration["MongoDB:DatabaseName_Content"]);
                return new DictionaryRepository(database);
            });

            services.AddScoped<IItemsRepository>(serviceProvider =>
            {
                var database = serviceProvider.GetRequiredService<IMongoClient>().GetDatabase(configuration["MongoDB:DatabaseName_Data"]);
                return new ItemRepository(database);
            });

            services.AddScoped<IMediaRepository>(serviceProvider =>
            {
                var database = serviceProvider.GetRequiredService<IMongoClient>().GetDatabase(configuration["MongoDB:DatabaseName_Content"]);
                return new MediaRepository(database);
            });
        }
    }
}
