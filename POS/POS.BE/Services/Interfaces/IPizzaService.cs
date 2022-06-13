using Common;

namespace Services;
public interface IPizzaService {
    Task<Ingradients> GetIngradientsAsync();
    Task<List<Pizza>> GetPizzasAsync();


}