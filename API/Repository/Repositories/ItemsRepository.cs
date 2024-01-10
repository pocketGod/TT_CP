using MongoDB.Bson;
using MongoDB.Driver;

namespace TT_CP.API.Repository.Repositories
{
    public interface IItemsRepository : IRepository<Item>
    {
        IEnumerable<Item> GetAll();
        Item GetById(string id);
        Task<bool> EditById(string id, Item updatedItem);
    }

    public class ItemRepository : Repository<Item>, IItemsRepository
    {
        public ItemRepository(IMongoDatabase database)
            : base(database, "Items")
        {
        }

        public IEnumerable<Item> GetAll()
        {
            return FindAll();
        }

        public Item GetById(string id)
        {
            var objectId = new ObjectId(id);
            return FindOne(Builders<Item>.Filter.Eq("_id", objectId));
        }

        public async Task<bool> EditById(string id, Item updatedItem)
        {
            var objectId = new ObjectId(id);
            await ReplaceOneAsync(Builders<Item>.Filter.Eq("_id", objectId), updatedItem);
            return true;
        }
    }
}
