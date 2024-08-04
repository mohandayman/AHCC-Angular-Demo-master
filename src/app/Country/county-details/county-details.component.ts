import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from 'src/app/Services/country.service';
import { Subscription } from 'rxjs';
import { country } from 'src/app/Types/Country/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-county-details',
  templateUrl: './county-details.component.html',
  styleUrls: ['./county-details.component.css']
})
export class CountyDetailsComponent implements OnInit, OnDestroy {

  CountryDetailsForm: FormGroup;
  private subscription: Subscription = new Subscription();

  constructor(private router:Router, public CountryService: CountryService, private fb: FormBuilder) {
    this.CountryDetailsForm = this.fb.group({
      Code: ['', [Validators.required]],
      NameAr: ['', [Validators.required, Validators.maxLength(100)]],
      Name: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.CountryService.countryDetails$.subscribe((country: country | null) => {
        if (country) {
          this.CountryDetailsForm.patchValue({
            Name: country.name,
            NameAr: country.nameAr,
            Code: country.code,
          });
        }
      })
    );

    // Fetch initial country details
    // this.CountryService.GetAll().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get Name() {
    return this.CountryDetailsForm.get('Name')!!;
  }

  
  get NameAr() {
    return this.CountryDetailsForm.get('NameAr')!!;
  }
  get Code() {
    return this.CountryDetailsForm.get('Code')!!;
  }


  submitForm() {
    if (this.CountryDetailsForm.valid) {
      const updatedCountry: country = {
        ...this.CountryDetailsForm.value,
        ID : this.CountryService.countryDetailsSubject.value?.id
        // Include other necessary properties here if needed
      };
      this.CountryService.save(updatedCountry);
      console.log('Form submitted', this.CountryDetailsForm.value);
    }
  }
  Cancel() {
    debugger
    this.router.navigate(['/home']);
  }
}
