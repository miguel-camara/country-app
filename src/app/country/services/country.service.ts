import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { CountryMapper } from '@country/mappers/country.mapper';
import { Country } from '@country/interfaces/country.interface';
import { Region } from '@country/interfaces/region.type';
import { RESTCountriesResponse } from '@country/interfaces/rest-countries.interface';

const API_URL = environment.API_URL;
const PAGE_LIMIT = 100;

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<Region, Country[]>();

  private readonly authHeaders = {
    Authorization: `Bearer ${environment.API_KEY}`,
  };

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }

    return this.getCountries(`${API_URL}/capitals`, { q: query }).pipe(
      tap((countries) => this.queryCacheCapital.set(query, countries)),
      catchError(() => {
        return throwError(
          () => new Error(`No se pudo obtener capitales con esa query "${query}"`),
        );
      }),
    );
  }

  searchByCountry(query: string) {
    query = query.toLowerCase();

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }

    return this.getCountries(`${API_URL}/name`, { q: query }).pipe(
      tap((countries) => this.queryCacheCountry.set(query, countries)),
      delay(2000),
      catchError(() => {
        return throwError(() => new Error(`No se pudo obtener países con ese query "${query}"`));
      }),
    );
  }

  searchByRegion(region: Region) {
    if (this.queryCacheRegion.has(region)) {
      return of(this.queryCacheRegion.get(region) ?? []);
    }

    return this.getCountries(API_URL, { region, limit: PAGE_LIMIT }).pipe(
      tap((countries) => this.queryCacheRegion.set(region, countries)),
      catchError(() => {
        return throwError(() => new Error(`No se pudo obtener países con ese query "${region}"`));
      }),
    );
  }

  searchCountryByAlphaCode(code: string) {
    return this.getCountries(`${API_URL}/code`, { q: code }).pipe(
      map((countries) => countries.at(0)),
      catchError(() => {
        return throwError(() => new Error(`No se pudo obtener países con ese código "${code}"`));
      }),
    );
  }

  private getCountries(
    url: string,
    params?: Record<string, string | number>,
  ): Observable<Country[]> {
    return this.http
      .get<RESTCountriesResponse>(url, {
        headers: this.authHeaders,
        params,
      })
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp.data.objects ?? [])),
      );
  }
}
