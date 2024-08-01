import { Component } from '@angular/core';
import { CountryService } from 'src/app/Services/country.service';
import { County } from 'src/app/Types/county';


@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.css']
})
export class GridTableComponent {

    
    
   constructor(public CountryService:CountryService){

    console.log(CountryService)
   }
    
   
}
