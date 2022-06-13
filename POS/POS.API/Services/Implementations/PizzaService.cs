using Common;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Repository;

namespace Services;
public class PizzaService : IPizzaService
{

    private readonly IPizzaRepository _repo;

    public PizzaService(IPizzaRepository repo){
        _repo = repo;
    }

    public async Task<Ingradients> GetIngradientsAsync()
    {
       return await _repo.GetIngradients();
    }

    public async Task<List<Pizza>> GetPizzasAsync()
    {
        return await _repo.GetPizzas();
    }
}
