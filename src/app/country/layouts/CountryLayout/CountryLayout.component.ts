import { Component } from '@angular/core';

import { TopMenuComponent } from "../../components/top-menu/top-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'country-layout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './CountryLayout.component.html',
})
export class CountryLayoutComponent { }
