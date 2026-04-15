import { Component, inject, linkedSignal, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

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

    this.router.navigate(['/country/by-capital'], {
      queryParams: {
        query: $query,
      },
    });

    this.countryService.searchByCapital($query).subscribe({
      next: (countries) => {
        this.setValues(countries)
      },
      error: (err: Error) => {
        this.setValues([])
        this.isError.set(err.message);
      }
    });
  }

  setValues(countries: Country[]) {
    this.isLoading.set(false);
    this.countries.set(countries);
  }

  //  Origin
  // countryResource = rxResource({
  //   params: () => ({ query: this.query() }),
  //   stream: ({ params }) => {
  //     if (!params.query) return of([]);

  //     this.router.navigate(['/country/by-capital'], {
  //       queryParams: {
  //         query: params.query,
  //       },
  //     });

  //     return this.countryService.searchByCapital(params.query);
  //   },
  // });


  // countryResource = resource({
  //   params: () => ({ query: this.query() }),
  //   loader: async ({ params }) => {
  //     if (!params.query) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(params.query)
  //     );
  //   },
  // });

}
