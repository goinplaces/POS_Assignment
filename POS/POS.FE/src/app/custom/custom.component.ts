import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ingradients } from '../models/ingradients';
import { pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'custom',
  templateUrl: './custom.component.html',
})
export class CustomComponent implements OnInit {

    id?:number = 0;
    customPizza : pizza = {};
    allIngradients? : ingradients = {};
    selectedIngridients:any=[];
    selectedToppings:any=[];isExtraCheeseSelected =false;

    selectedPizza:any;extraCheeseItem:any;
    pizzaSizes:any=[];crushTypes:any=[];ingridients:any=[];toppings:any=[];

    constructor(private route:ActivatedRoute,private pizzaService:PizzaService,private router:Router){
        this.route.params.subscribe( params =>
            this.id = params['id']
        );
    }


    ngOnInit(){
        this.getPizzaIngredients();
        this.getSelectedPizza();
    }

    getSelectedPizza(){
        this.pizzaService.getPizzaById(this.id).subscribe(res=>{
            this.customPizza = res[0];
            this.updatePrice();
        });
        
    }

    getPizzaIngredients(){
        this.pizzaService.getIngradients().subscribe(res=>{
            if(res != null){
               this.allIngradients = res;
            }
        });
    }
    

    sizeChange(event:any) {
         
        this.updatePrice();
    }

    sauceChange(event:any) {
         
        this.updatePrice();
    }

   

    updatePrice(){
        var price = 0;
        var selectedPizz = this.customPizza;
        //size
        this.allIngradients?.size?.forEach(function(item){
            if(item.name == selectedPizz.size){
                if(item?.price != null) price = price + item?.price;
            }
        });

        this.allIngradients?.sauce?.forEach(function(item){
            if(item.name == selectedPizz.sauce){
                if(item?.price != null) price = price + item?.price;
            }
        });

        this.allIngradients?.topping?.forEach(function(item){
            selectedPizz.toppings?.forEach(function(top){
                if(item.name == top){
                    if(item?.price != null) price = price + item?.price;
                }
            })
        });

        this.allIngradients?.cheeseSelection?.forEach(function(item){
                if(item.name == selectedPizz.cheeseSelection){
                    if(item?.price != null) price = price + item?.price;
                }
            });
        

        this.customPizza.price = price;
    }

   
    onAdd(){
         this.pizzaService.orderPizza(this.customPizza).subscribe(res=>{
             alert("Your order is placed. Order Number: " + res.orderId);
             this.router.navigate(['/']);
        });
    }

    onSizeSelect(item:any)
    {
        this.customPizza.size = item.name;
        this.updatePrice();

    }

    onSauceSelect(item:any)
    {
        this.customPizza.sauce = item.name;
        this.updatePrice();

    }

    onToppingSelect(event:any,item:any){
        if(!event.target.checked){
            this.customPizza.toppings = this.customPizza.toppings?.filter(function(e) { return e !== item.name })
        }
        else
        this.customPizza.toppings?.push(item.name);
        this.updatePrice();

    }

    onCheeseSelect(event:any,item:any){
        if(!event.target.checked){
            this.customPizza.cheeseSelection = '';
        }
        else
            this.customPizza.cheeseSelection = item.name;
        this.updatePrice();

    }
    
    isTopping(item:any){
        if(this.customPizza.toppings != null){
            for(var i=0;i<this.customPizza.toppings.length;i++){
                if(this.customPizza.toppings[i] == item.name)
                return true;
            }
        }
        return false;
    }

    isCheese(item:any){
        if(this.customPizza.cheeseSelection != null){
            for(var i=0;i<this.customPizza.cheeseSelection.length;i++){
                if(this.customPizza.cheeseSelection[i] == item.name)
                return true;
            }
        }
        return false;
    }

    isSauce(item:any){
        if(this.customPizza.sauce != null){
                if(this.customPizza.sauce == item.name)
                    return true;
        }
        return false;
    }

    isSize(item:any){
        if(this.customPizza.size != null){
                if(this.customPizza.size == item.name)
                return true;
            }
        
        return false;
    }
}
