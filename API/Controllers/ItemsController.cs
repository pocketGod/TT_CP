using Microsoft.AspNetCore.Mvc;
using TT_CP.API.Repository.Repositories;
using TT_CP.API.WorkFlow.Services;

namespace TT_CP.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly IItemService _itemService;

        public ItemsController(IItemService itemService)
        {
            _itemService = itemService;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllItems()
        {
            if (HttpContext.Items["User"] == null)
                return Unauthorized();
            var items = _itemService.GetAllItems();
            return Ok(items);
        }

        [HttpGet("GetSingle/{id}")]
        public IActionResult GetItemById(string id)
        {
            var item = _itemService.GetItemById(id);
            return item == null ? NotFound() : Ok(item);
        }

        [HttpPut("EditSingle/{id}")]
        public IActionResult EditItemById(string id, [FromBody] Item updatedItem)
        {
            _itemService.EditItemById(id, updatedItem);
            return Ok();
        }
    }

}
