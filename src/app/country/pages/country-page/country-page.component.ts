import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryInformationComponent } from "./country-information/country-information.component";
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { CountryService } from '@country/services/country.service';
import { LoadingComponent } from '@shared/components/loading/loading';

@Component({
  selector: 'country-page',
  imports: [NotFoundComponent, CountryInformationComponent, LoadingComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }) => {
      return this.countryService.searchCountryByAlphaCode(params.code);
    },
  });

}
