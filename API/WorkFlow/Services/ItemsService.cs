using Microsoft.Extensions.Caching.Memory;
using TT_CP.API.Repository.Repositories;
using TT_CP.API.WorkFlow.Utils;

namespace TT_CP.API.WorkFlow.Services
{
    public interface IItemService
    {
        IEnumerable<Item> GetAllItems();
        Item GetItemById(string id);
        Task<bool> EditItemById(string id, Item updatedItem);
    }

    public class ItemService : IItemService
    {
        private readonly IItemsRepository _itemRepository;
        private readonly ICachingHelper _cachingHelper;
        private readonly TimeSpan _cacheDuration = TimeSpan.FromMinutes(45);

        public ItemService(IItemsRepository itemRepository, ICachingHelper cachingService)
        {
            _itemRepository = itemRepository;
            _cachingHelper = cachingService;
        }

        public IEnumerable<Item> GetAllItems()
        {
            return _cachingHelper.GetOrCreate("GetAllItems", () => _itemRepository.GetAll(), _cacheDuration);
        }

        public Item GetItemById(string id)
        {
            return _cachingHelper.GetOrCreate($"GetItemById_{id}", () => _itemRepository.GetById(id), _cacheDuration);
        }

        public async Task<bool> EditItemById(string id, Item updatedItem)
        {
            bool result = await _itemRepository.EditById(id, updatedItem);
            if (result)
            {
                _cachingHelper.Remove($"GetItemById-{id}");
                Task.Run(() => RefreshAllItemsCache());
            }
            return result;
        }

        private void RefreshAllItemsCache()
        {
            _cachingHelper.Remove("GetAllItems");
            _cachingHelper.GetOrCreate("GetAllItems", () => _itemRepository.GetAll(), _cacheDuration);
        }
    }


}
