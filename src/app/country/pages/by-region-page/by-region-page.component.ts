import { Component, computed, effect, inject, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of } from 'rxjs';
import { ALL_REGIONS, REGION_LABELS, REGION_MAPS, Region } from '@country/interfaces/region.type';
import { CountryListComponent } from '@country/components/country-list/country-list.component';
import { CountryService } from '@country/services/country.service';

function validateQueryParam(queryParam: string): Region {
  const match = ALL_REGIONS.find((region) => region.toLowerCase() === queryParam.toLowerCase());
  return match ?? 'Americas';
}

@Component({
  selector: 'by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
  host: { class: 'sheet-page' },
})
export class ByRegionPageComponent {
  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  selectedRegion = toSignal(
    this.activatedRoute.queryParamMap.pipe(
      map((params) => validateQueryParam(params.get('region') ?? '')),
    ),
    {
      initialValue: validateQueryParam(
        this.activatedRoute.snapshot.queryParamMap.get('region') ?? '',
      ),
    },
  );

  selectedCode = signal<string | null>(null);
  regionLabel = computed(() => REGION_LABELS[this.selectedRegion()]);
  mapSrc = computed(() => REGION_MAPS[this.selectedRegion()]);
  // showPin = computed(() => this.selectedRegion() === 'Americas' && Boolean(this.selectedCode()));
  featuredCodes = ['MX', 'BZ', 'GT'] as const;

  pinnedCountries = computed(() => {
    const countries = this.countryResource.hasValue() ? this.countryResource.value() : [];
    if (this.selectedRegion() !== 'Americas') return countries;

    const featured = this.featuredCodes
      .map((code) => countries.find((country) => country.cca2 === code))
      .filter((country): country is NonNullable<typeof country> => Boolean(country));
    const rest = countries.filter(
      (country) =>
        !this.featuredCodes.includes(country.cca2 as (typeof this.featuredCodes)[number]),
    );
    return [...featured, ...rest];
  });

  countryResource = rxResource({
    params: () => ({ region: this.selectedRegion() }),
    stream: ({ params }) => {
      if (!params.region) return of([]);

      this.router.navigate(['/country/by-region'], {
        queryParams: { region: params.region },
      });

      return this.countryService.searchByRegion(params.region);
    },
  });

  private selectFirst = effect(() => {
    const countries = this.pinnedCountries();
    this.selectedCode.set(countries[0]?.cca2 ?? null);
  });
}
