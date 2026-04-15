import { Component, inject, linkedSignal, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent {

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() => this.queryParam);

  constructor() {
    this.onSearch(this.query());
  }

  onSearch($query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.router.navigate(['/country/by-country'], {
      queryParams: {
        query: $query,
      },
    });

    this.countryService.searchByCountry($query)
      .subscribe({
        next: (countries) => {
          this.setValues(countries)
        },
        error: (err: Error) => {
          this.setValues([], err.message);
        }
      });
  }

  setValues(countries: Country[], err: string | null = null) {
    this.isLoading.set(false);
    this.countries.set(countries);
    this.isError.set(err);
  }
}
