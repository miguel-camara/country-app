import { Component, inject, linkedSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingComponent } from '@shared/components/loading/loading';
import { SearchInputComponent } from '@country/components/search-input/search-input.component';
import { CountryListComponent } from '@country/components/country-list/country-list.component';
import { CountryService } from '@country/services/country.service';

@Component({
  selector: 'by-country-page',
  imports: [SearchInputComponent, CountryListComponent, LoadingComponent],
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() => this.queryParam);


  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {

      if (!params.query) return of([]);

      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: params.query,
        },
      });

      return this.countryService.searchByCountry(params.query);
    },
  });
}
