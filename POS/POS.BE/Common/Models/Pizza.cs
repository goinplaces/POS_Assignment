using Newtonsoft.Json;

namespace Common;

public class Pizza
{
    public string Size { get; set; }
    public string Id { get; set; }
    public string Name { get; set; }
    public string Sauce { get; set; }
    public List<string> Toppings { get; set; }
    public int Price {get;set;}
    public string Image {get;set;}
    public string CheeseSelection {get;set;}


}
