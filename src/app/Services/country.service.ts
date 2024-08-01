import { Injectable } from '@angular/core';
import { County } from '../Types/county';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor()
   { 
    
   }

  public countries:County[] = [
    new County(1, 'United States', 'الولايات المتحدة', 'US', '2023-01-01T00:00:00Z'),
    new County(2, 'Egypt', 'مصر', 'EG', '2023-01-02T00:00:00Z'),
    new County(3, 'Canada', 'كندا', 'CA', '2023-01-03T00:00:00Z'),
    new County(4, 'Germany', 'ألمانيا', 'DE', '2023-01-04T00:00:00Z'),
    new County(5, 'Japan', 'اليابان', 'JP', '2023-01-05T00:00:00Z')
];

   PageMode:string='Grid';
  Save  = (county:County)=>{
    console.log(county)
  }
  Search  = ()=>{}
}
