using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Common;
using Microsoft.Extensions.Options;
using System.Net.Http;
using Services;
using System.Threading.Tasks;
using Moq.Protected;
using System.Threading;
using System;
using System.Net;
using Newtonsoft.Json;
using System.Collections.Generic;
using Repository;

namespace Tests;

[TestClass]
public class PizzaServiceTests
{
     private readonly PizzaService _pizzaSvc;
     private readonly Mock<HttpMessageHandler> handlerMock;

    public PizzaServiceTests()
    {
        
    }

    [TestMethod]
    public async Task GetIngradients_Success()
    {

        var mockResponse = new Ingradients() { Size  = new List<Pair>() , Sauce = new List<Pair>() };
        var _pizzaInt = new Mock<IPizzaRepository>();
        _pizzaInt.Setup(s=>s.GetIngradients()).ReturnsAsync(mockResponse);
        var _Svc = new PizzaService(_pizzaInt.Object);
        
        var response = await _Svc.GetIngradientsAsync();

       Assert.IsNotNull(response);
       Assert.IsTrue(response.Size != null);

    }

     [TestMethod]
    public async Task GetIngradients_Empty()
    {
        var _pizzaInt = new Mock<IPizzaRepository>();
        Ingradients ing = null; 
        _pizzaInt.Setup(s=>s.GetIngradients()).ReturnsAsync(ing);
        var _Svc = new PizzaService(_pizzaInt.Object);
        
        var response = await _Svc.GetIngradientsAsync();

        Assert.IsNull(response);
    }


     [TestMethod]
    public async Task GetPizzas_Success()
    {
        var p1 = new Pizza() { Id = "1", Name = "Farm Fresh", Price = 200};
        var res = new List<Pizza>();
        res.Add(p1);
        var _pizzaInt = new Mock<IPizzaRepository>();
        _pizzaInt.Setup(s=>s.GetPizzas()).ReturnsAsync(res);
        var _Svc = new PizzaService(_pizzaInt.Object);
        
        var response = await _Svc.GetPizzasAsync();

        Assert.IsNotNull(response);
        Assert.IsTrue(response[0].Price == 200);
    }

     [TestMethod]
    public async Task GetPizzas_Empty()
    {
        var _pizzaInt = new Mock<IPizzaRepository>();
        List<Pizza> res = null;
        _pizzaInt.Setup(s=>s.GetPizzas()).ReturnsAsync(res);
        var _Svc = new PizzaService(_pizzaInt.Object);

       
        var response = await _Svc.GetPizzasAsync();

        Assert.IsNull(response);
    }
}