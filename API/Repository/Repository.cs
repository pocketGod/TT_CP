using MongoDB.Driver;

namespace TT_CP.API.Repository
{
    public class Repository<T> : IRepository<T>
    {
        private readonly IMongoCollection<T> _collection;

        public Repository(IMongoDatabase database, string collectionName)
        {
            _collection = database.GetCollection<T>(collectionName);
        }

        public T FindOne(FilterDefinition<T> filter)
        {
            return _collection.Find(filter).FirstOrDefault();
        }

        public List<T> FindAll(FilterDefinition<T> filter = null)
        {
            return filter == null ? _collection.Find(_ => true).ToList() : _collection.Find(filter).ToList();
        }

        public async Task InsertOneAsync(T document)
        {
            await _collection.InsertOneAsync(document);
        }

        public async Task ReplaceOneAsync(FilterDefinition<T> filter, T updatedDocument)
        {
            await _collection.ReplaceOneAsync(filter, updatedDocument);
        }


    }
}
