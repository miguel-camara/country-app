import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '@country/components/top-menu/top-menu.component';

@Component({
  selector: 'country-layout',
  imports: [RouterOutlet, RouterLink, TopMenuComponent],
  templateUrl: './CountryLayout.component.html',
})
export class CountryLayoutComponent {}
