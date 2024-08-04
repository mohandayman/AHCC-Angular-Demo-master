import { Injectable } from '@angular/core';
import { country } from '../Types/Country/country';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountryModel } from '../Types/Country/country-model';
import { City } from '../Types/City/city';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countryDetailsSubject: BehaviorSubject<country | null> = new BehaviorSubject<country | null>(null);
  countryDetails$ = this.countryDetailsSubject.asObservable();

  constructor(
    public ConfiService: ConfigService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  public countries: country[] = []

  apiUrl: string = this.ConfiService.getBaseApiUrl() + 'Country/';

  GetAll(): Observable<country[]> {
    const apiurl = this.apiUrl + 'GetAll';
    return this.httpClient.get<country[]>(apiurl);
  }

  getAllCountries() {
    this.GetAll().subscribe(
      (data: country[]) => {
        console.log(data)
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  Add(Country: country): Observable<country> {
    const apiUrl: string = this.apiUrl + 'AddCountry';
    return this.httpClient.post<country>(apiUrl, Country);
  }

  Update(country: country) {
    this.router.navigate(['/CountryDetails']);
    this.countryDetailsSubject.next(country);
    console.log(this.countryDetailsSubject.value);
    
  
  }

  save(country:country) {
    const apiUrl: string = this.apiUrl + 'Update/' + country.id.toString();
     this.httpClient.put(apiUrl, country).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  Delete(){
    const country = this.countryDetailsSubject.value;
    if (country) {
      const apiUrl: string = this.apiUrl + 'DeleteCountry' + country.id.toString();
       this.httpClient.delete<void>(apiUrl).subscribe(()=>{this.getAllCountries();})
      
    }
    return new Observable<void>();
  }
}
