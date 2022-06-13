import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaService } from './services/pizza.service';
import { MenuComponent } from './menu/menu.component';
import { CustomComponent } from './custom/custom.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
