import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
