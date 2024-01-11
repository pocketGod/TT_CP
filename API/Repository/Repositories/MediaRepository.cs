using MongoDB.Bson;
using MongoDB.Driver;
using TT_CP.API.Entites.General;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TT_CP.API.Repository.Repositories
{
    public interface IMediaRepository : IRepository<MediaItem>
    {
        IEnumerable<MediaItem> GetAll();
        MediaItem GetById(string id);
        Task<bool> EditById(string id, MediaItem updatedItem);
    }

    public class MediaRepository : Repository<MediaItem>, IMediaRepository
    {
        public MediaRepository(IMongoDatabase database)
        : base(database, "Media")
        {
        }

        public IEnumerable<MediaItem> GetAll()
        {
            return FindAll();
        }

        public MediaItem GetById(string id)
        {
            var objectId = new ObjectId(id);
            return FindOne(Builders<MediaItem>.Filter.Eq("_id", objectId));
        }

        public async Task<bool> EditById(string id, MediaItem updatedItem)
        {
            var objectId = new ObjectId(id);
            await ReplaceOneAsync(Builders<MediaItem>.Filter.Eq("_id", objectId), updatedItem);
            return true;
        }
    }
}
