import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { ALL_REGIONS, REGION_LABELS, Region } from '@country/interfaces/region.type';

@Component({
  selector: 'top-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {
  private router = inject(Router);

  regions = ALL_REGIONS;
  labels = REGION_LABELS;

  private currentRegion = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => new URLSearchParams(this.router.url.split('?')[1] ?? '').get('region') ?? 'Americas'),
    ),
    { initialValue: 'Americas' },
  );

  private onRegionPage = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.router.url.includes('/country/by-region')),
    ),
    { initialValue: false },
  );

  isRegion(region: Region): boolean {
    return this.onRegionPage() === true && this.currentRegion()?.toLowerCase() === region.toLowerCase();
  }
}
