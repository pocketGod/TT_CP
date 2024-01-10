using MongoDB.Driver;
using System.Threading.Tasks;

namespace TT_CP.API.Repository
{
    public interface IRepository<T>
    {
        T FindOne(FilterDefinition<T> filter);
        List<T> FindAll(FilterDefinition<T> filter = null);
        Task InsertOneAsync(T document);
        Task ReplaceOneAsync(FilterDefinition<T> filter, T updatedDocument);
    }
}
