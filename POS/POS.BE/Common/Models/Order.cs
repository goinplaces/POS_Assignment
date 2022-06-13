using Newtonsoft.Json;

namespace Common;

public class Order
{
    public string OrderId { get; set; }
    public List<Pizza> Pizzas { get; set; }
    public int Total { get; set; }
}
