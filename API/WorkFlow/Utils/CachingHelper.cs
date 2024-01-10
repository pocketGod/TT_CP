using Microsoft.Extensions.Caching.Memory;
using System.Collections;

namespace TT_CP.API.WorkFlow.Utils
{
    public interface ICachingHelper
    {
        T GetOrCreate<T>(string cacheKey, Func<T> createItem, TimeSpan duration);
        void Remove(string cacheKey);
    }

    public class CachingHelper : ICachingHelper
    {
        private readonly IMemoryCache _cache;

        public CachingHelper(IMemoryCache cache)
        {
            _cache = cache;
        }

        public T GetOrCreate<T>(string cacheKey, Func<T> createItem, TimeSpan duration)
        {
            if (!_cache.TryGetValue(cacheKey, out T cacheEntry))
            {
                cacheEntry = createItem();

                if (cacheEntry != null && !(cacheEntry is ICollection collection && collection.Count == 0))
                {
                    var cacheEntryOptions = new MemoryCacheEntryOptions()
                        .SetAbsoluteExpiration(duration);
                    _cache.Set(cacheKey, cacheEntry, cacheEntryOptions);
                }
            }
            return cacheEntry;
        }


        public void Remove(string cacheKey)
        {
            _cache.Remove(cacheKey);
        }

    }


}
