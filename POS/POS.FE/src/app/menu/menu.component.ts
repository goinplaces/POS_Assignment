import { Component, OnInit } from '@angular/core';
import { pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  title = 'POS.UI';
  menu? : pizza[]

  ngOnInit(): void {
    this.pizzaService.getMenu().subscribe(res=>{
      this.menu = res;
    },
    (error)=>{

    });
  }

  constructor(private pizzaService : PizzaService ){
    
  }
    
}
