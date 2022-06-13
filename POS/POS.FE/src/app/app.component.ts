import { Component, OnInit } from '@angular/core';
import { ingradients } from './models/ingradients';
import { pizza } from './models/pizza';
import { PizzaService } from './services/pizza.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'POS.UI';
  allIngradients? : ingradients;
  menu? : pizza[]

  ngOnInit(): void {
    this.pizzaService.getMenu().subscribe(res=>{
      this.menu = res;
    },
    (error)=>{

    });

    this.pizzaService.getIngradients().subscribe(res=>{
      this.allIngradients = res;
    },
    (error)=>{

    });
  }

  constructor(private pizzaService : PizzaService ){
    
  }
}
