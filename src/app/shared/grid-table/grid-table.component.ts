import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/Services/country.service';


@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.css']
})
export class GridTableComponent implements OnInit {

    
    
   constructor(public CountryService:CountryService){   }
  ngOnInit(): void {
    this.CountryService.getAllCountries();
  }
    
   
}
