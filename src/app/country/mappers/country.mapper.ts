import { Country } from '@country/interfaces/country.interface';
import { RESTCountry } from '@country/interfaces/rest-countries.interface';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      capital: restCountry.capitals?.map((capital) => capital.name).join(', ') ?? '',
      cca2: restCountry.codes.alpha_2,
      flag: restCountry.flag.emoji,
      flagSvg: restCountry.flag.url_svg,
      name: restCountry.names.translations['spa']?.common ?? restCountry.names.common,
      population: restCountry.population,
      region: restCountry.region,
      subRegion: restCountry.subregion,
    };
  }

  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
