using MongoDB.Bson;
using MongoDB.Driver;
using TT_CP.API.Entites.General;

namespace TT_CP.API.Repository.Repositories
{
    public interface IContentRepository : IRepository<TranslationDictionaryItem>
    {
        IEnumerable<TranslationDictionaryItem> GetAll();
        TranslationDictionaryItem GetById(string id);
        Task<bool> EditById(string id, TranslationDictionaryItem updatedItem);
        Task<bool> AddNewItem(TranslationDictionaryItem newItem);
    }

    public class ContentRepository : Repository<TranslationDictionaryItem>, IContentRepository
    {
        public ContentRepository(IMongoDatabase database)
        : base(database, "Dictionary")
        {
           
        }

        public IEnumerable<TranslationDictionaryItem> GetAll()
        {
            return FindAll();
        }

        public TranslationDictionaryItem GetById(string id)
        {
            var objectId = new ObjectId(id);
            return FindOne(Builders<TranslationDictionaryItem>.Filter.Eq("_id", objectId));
        }

        public async Task<bool> EditById(string id, TranslationDictionaryItem updatedItem)
        {
            var objectId = new ObjectId(id);
            await ReplaceOneAsync(Builders<TranslationDictionaryItem>.Filter.Eq("_id", objectId), updatedItem);
            return true;
        }

        public async Task<bool> AddNewItem(TranslationDictionaryItem newItem)
        {
            await InsertOneAsync(newItem);
            return true;
        }
    }
}
