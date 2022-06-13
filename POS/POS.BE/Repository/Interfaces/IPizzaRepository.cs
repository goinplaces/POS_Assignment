using Common;

namespace Repository;
public interface IPizzaRepository {
    Task<Ingradients> GetIngradients();
    Task<List<Pizza>> GetPizzas();


}