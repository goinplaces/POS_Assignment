using Common;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace Repository;
public class PizzaRepository : IPizzaRepository
{
    public async Task<Ingradients> GetIngradients()
    {
        var AllIngradients = new Ingradients();
        using (StreamReader r = new StreamReader("../Data/Ingredients.json"))
            {
                string Json = r.ReadToEnd();
                AllIngradients = JsonConvert.DeserializeObject<Ingradients>(Json);
            }

        return AllIngradients;
    }

    public async Task<List<Pizza>> GetPizzas()
    {
        var Pizzas = new List<Pizza>();
        using (StreamReader r = new StreamReader("../Data/ChefPizzas.json"))
            {
                string Json = r.ReadToEnd();
                Pizzas = JsonConvert.DeserializeObject<List<Pizza>>(Json);
            }

        return Pizzas;
    }
}
