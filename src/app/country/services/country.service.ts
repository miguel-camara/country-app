import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { CountryMapper } from '@country/mappers/country.mapper';
import { Country } from '@country/interfaces/country.interface';
import { Region } from '@country/interfaces/region.type';
import { RESTCountry } from '@country/interfaces/rest-countries.interface';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<Region, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }

    console.log(API_URL);


    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap((countries) => this.queryCacheCapital.set(query, countries)),
      catchError(() => {
        return throwError(
          () => new Error(`No se pudo obtener capitales con esa query "${query}"`)
        )
      })
    );
  }

  searchByCountry(query: string) {
    const url = `${API_URL}/name/${query}`;
    query = query.toLowerCase();

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }


    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap((countries) => this.queryCacheCountry.set(query, countries)),
      delay(2000),
      catchError((error) => {
        return throwError(
          () => new Error(`No se pudo obtener países con ese query "${query}"`)
        );
      })
    );
  }

  searchByRegion(region: Region) {
    const url = `${API_URL}/region/${region}`;

    if (this.queryCacheCountry.has(region)) {
      return of(this.queryCacheCountry.get(region) ?? []);
    }

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap((countries) => this.queryCacheRegion.set(region, countries)),
      catchError((error) => {
        console.log('Error fetching ', error);

        return throwError(
          () => new Error(`No se pudo obtener países con ese query "${region}"`)
        );
      })
    );
  }


  searchCountryByAlphaCode(code: string) {
    const url = `${API_URL}/alpha/${code}`;


    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      map((countries) => countries.at(0)),
      catchError((error) => {

        return throwError(
          () => new Error(`No se pudo obtener países con ese código "${code}"`)
        );
      })
    );
  }
}
