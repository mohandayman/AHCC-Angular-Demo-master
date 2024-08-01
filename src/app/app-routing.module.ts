import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GridTableComponent } from './shared/grid-table/grid-table.component';

import { CountyDetailsComponent } from './Country/county-details/county-details.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
const Router: Routes = [
  // (Lazy Loading ) Laod Module Only when Access authentiction in Url !!
  { path: 'home', component: GridTableComponent },
  { path: 'CountryDetails', component: CountyDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },


]
@NgModule({
  declarations:[
    GridTableComponent,
    AppComponent,
    NavBarComponent,
    FooterComponent

  ],
  imports: [RouterModule.forRoot(Router),

  CommonModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}