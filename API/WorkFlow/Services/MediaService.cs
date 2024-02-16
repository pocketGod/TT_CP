using MongoDB.Bson;
using TT_CP.API.Entites.General;
using TT_CP.API.Repository.Repositories;
using TT_CP.API.WorkFlow.Utils;

namespace TT_CP.API.WorkFlow.Services
{

    public interface IMediaService
    {
        IEnumerable<MediaItem> GetAllItems();
        Task EditItems(IEnumerable<MediaItem> items);
    }
    public class MediaService : IMediaService
    {
        private readonly IMediaRepository _mediaRepository;
        private readonly ICachingHelper _cachingHelper;
        private readonly TimeSpan _cacheDuration = TimeSpan.FromMinutes(45);

        public MediaService(IMediaRepository mediaRepository, ICachingHelper cachingHelper)
        {
            _mediaRepository = mediaRepository;
            _cachingHelper = cachingHelper;
        }

        public IEnumerable<MediaItem> GetAllItems()
        {
            return _cachingHelper.GetOrCreate("GetAllMediaItems",
                () => _mediaRepository.GetAll(), _cacheDuration);
        }


        public async Task EditItems(IEnumerable<MediaItem> items)
        {
            foreach (var item in items)
            {
                if (item.Id != ObjectId.Empty)
                {
                    await _mediaRepository.EditById(item.Id.ToString(), item);
                }
                else
                {
                    //await _mediaRepository.AddNewItem(item);
                }
            }
            RefreshAllContentItemsCache();
        }

        private void RefreshAllContentItemsCache()
        {
            _cachingHelper.Remove("GetAllMediaItems");
            _cachingHelper.GetOrCreate("GetAllMediaItems",
                () => _mediaRepository.GetAll(), _cacheDuration);
        }
    }
}
