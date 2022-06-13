import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; 
import { pizza } from '../models/pizza';
import { ingradients } from '../models/ingradients'

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  basePath = 'https://localhost:7115/api/pizza';


  getMenu() {
    const route = this.basePath + '/menu';

    return this.http.get<pizza[]>(route);
  }


  getIngradients() {
    const route = this.basePath + '/ingradients';

    return this.http.get<ingradients>(route);
  }

  getPizzaById(id){
    const route = this.basePath + '/'+ id;
    return this.http.get<pizza>(route);
  }

  orderPizza(pz){
    const route = this.basePath + '/order';
    return this.http.post<any>(route,pz);
  }
}
