using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.Design;
using TT_CP.API.Entites.General;
using TT_CP.API.WorkFlow.Services;

namespace TT_CP.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContentController : ControllerBase
    {
        private readonly IContentService _contentService;

        public ContentController(IContentService contentService)
        {
            _contentService = contentService;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllItems()
        {
            if (HttpContext.Items["User"] == null)
                return Unauthorized();
            var items = _contentService.GetAllItems();
            return Ok(items);
        }


        [HttpPut("EditDictionary")]
        public IActionResult EditItemById([FromBody] List<TranslationDictionaryItem> dictionaryVals )
        {
            _contentService.EditItems(dictionaryVals);
            return  Ok();
        }
    }
}
