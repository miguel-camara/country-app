import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Country } from '@country/interfaces/country.interface';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input<Country[]>([]);
  errorMessage = input<string | unknown | null>('');
  hasValues = input<boolean>(false);
}
