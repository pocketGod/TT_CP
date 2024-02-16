using TT_CP.API.Entites.General;
using TT_CP.API.WorkFlow.Services;

namespace TT_CP.API.WorkFlow.Managers
{
    public class ContentManager
    {
        private readonly IContentService _contentService;
        private readonly IMediaService _mediaService;

        public ContentManager(IContentService ContentService, IMediaService mediaService)
        {
            _contentService = ContentService;
            _mediaService = mediaService;
        }

        public ContentResponse GetAllItems()
        {
            IEnumerable<TranslationDictionaryItem> dictionary = _contentService.GetAllItems();
            IEnumerable<MediaItem> mediaItems = _mediaService.GetAllItems();

            return new ContentResponse
            {
                Translations = dictionary,
                MediaItems = mediaItems
            };
        }
    }
}
