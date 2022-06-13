using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Common;
using Services;

namespace API.Controllers;

[ApiController]
public class PizzaController : ControllerBase
{
    private readonly IPizzaService _pizzaService;

    public PizzaController(IPizzaService pizzaService)
    {
        _pizzaService = pizzaService;
    }
    
    [HttpGet("api/pizza/ingradients")]
    public async Task<IActionResult> Ingradients()
    {
        var AllIngradients = await _pizzaService.GetIngradientsAsync();
        return Ok(AllIngradients);
    }

    [HttpGet("api/pizza/menu")]
    public async Task<IActionResult> Menu()
    {
        var AllPizzas = await _pizzaService.GetPizzasAsync();
        return Ok(AllPizzas);
    }

    [HttpPost("api/pizza/order")]
    public async Task<IActionResult> Order([FromBody] Pizza pizza)
    {
        var OrderId = Guid.NewGuid().ToString().Substring(0,8);
        var status = new Status(){ OrderId = OrderId, Message = "success" };
        return Ok(status);
    }


    [HttpGet("api/pizza/{id}")]
    public async Task<IActionResult> Get(string id)
    {
        var AllPizzas = await _pizzaService.GetPizzasAsync();
        var pizza = AllPizzas.Where(a=>a.Id == id);
        return Ok(pizza);
    }

    

   
}
