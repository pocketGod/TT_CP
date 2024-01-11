using TT_CP.API.Entites.General;
using TT_CP.API.Repository.Repositories;
using TT_CP.API.WorkFlow.Utils;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using MongoDB.Bson;

namespace TT_CP.API.WorkFlow.Services
{
    public interface IContentService
    {
        IEnumerable<TranslationDictionaryItem> GetAllItems();
        Task EditItems(IEnumerable<TranslationDictionaryItem> items);
    }

    public class ContentService : IContentService
    {
        private readonly IDictionaryRepository _dictionaryRepository;
        private readonly ICachingHelper _cachingHelper;
        private readonly TimeSpan _cacheDuration = TimeSpan.FromMinutes(45);

        public ContentService(IDictionaryRepository dictionaryRepository, ICachingHelper cachingHelper)
        {
            _dictionaryRepository = dictionaryRepository;
            _cachingHelper = cachingHelper;
        }

        public IEnumerable<TranslationDictionaryItem> GetAllItems()
        {
            return _cachingHelper.GetOrCreate("GetAllContentItems",
                () => _dictionaryRepository.GetAll(), _cacheDuration);
        }


        public async Task EditItems(IEnumerable<TranslationDictionaryItem> items)
        {
            foreach (var item in items)
            {
                if (item.Id != ObjectId.Empty)
                {
                    await _dictionaryRepository.EditById(item.Id.ToString(), item);
                }
                else
                {
                    await _dictionaryRepository.AddNewItem(item);
                }
            }
            RefreshAllContentItemsCache();
        }

        private void RefreshAllContentItemsCache()
        {
            _cachingHelper.Remove("GetAllContentItems");
            _cachingHelper.GetOrCreate("GetAllContentItems",
                () => _dictionaryRepository.GetAll(), _cacheDuration);
        }
    }
}
