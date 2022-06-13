import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CustomComponent } from './custom/custom.component';



const routes: Routes = [ 
  { path: '', component: MenuComponent, pathMatch: 'full' },
  {path: 'custom/:id', component: CustomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
