export interface RESTCountriesResponse {
  data: {
    objects: RESTCountry[];
    meta: RESTCountriesMeta;
  };
}

export interface RESTCountriesMeta {
  total: number;
  count: number;
  limit: number;
  offset: number;
  more: boolean;
  request_id: string;
  duration: number;
}

export interface RESTCountry {
  names: CountryNames;
  codes: CountryCodes;
  capitals: CountryCapital[];
  flag: CountryFlag;
  region: string;
  subregion: string;
  area: Area;
  assets: unknown[];
  borders?: string[];
  calling_codes: string[];
  cars: Cars;
  classification: Classification;
  continents: string[];
  coordinates: Coordinates;
  currencies: Currency[];
  date: CountryDate;
  demonyms: Demonyms;
  descriptions: Descriptions;
  economy: Economy;
  government_type: string;
  landlocked: boolean;
  languages: Language[];
  leaders: unknown[];
  links: Links;
  memberships: Memberships;
  number_format: NumberFormat;
  parent: Parent;
  population: number;
  postal_code: PostalCode;
  timezones: string[];
  tlds: string[];
  units: Units;
  uuid: string;
}

export interface CountryNames {
  alternates: string[];
  common: string;
  official: string;
  native: { [key: string]: Translation };
  translations: { [key: string]: Translation };
}

export interface Translation {
  common: string;
  official: string;
}

export interface CountryCodes {
  alpha_2: string;
  alpha_3: string;
  ccn3: string;
  cioc: string;
  fifa: string;
  fips: string;
  gec: string;
}

export interface CountryCapital {
  attributes: CapitalAttributes;
  coordinates: Coordinates;
  name: string;
}

export interface CapitalAttributes {
  administrative: boolean;
  constitutional: boolean;
  executive: boolean;
  judicial: boolean;
  legislative: boolean;
  primary: boolean;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface CountryFlag {
  colors: FlagColors;
  description: string;
  emoji: string;
  html_entity: string;
  unicode: string;
  url_png: string;
  url_svg: string;
}

export interface FlagColors {
  dominant: string;
  palette: FlagPaletteColor[];
  prominent: string;
  swatches: FlagSwatches;
}

export interface FlagPaletteColor {
  hex: string;
  proportion: number;
}

export interface FlagSwatches {
  dark_muted: string | null;
  dark_vibrant: string | null;
  light_muted: string | null;
  light_vibrant: string | null;
  muted: string | null;
  vibrant: string | null;
}

export interface Area {
  kilometers: number;
  miles: number;
}

export interface Cars {
  driving_side: string;
  signs: string[];
}

export interface Classification {
  dependency: boolean;
  dependency_type: string;
  disputed: boolean;
  iso_status: string;
  sovereign: boolean;
  un_member: boolean;
  un_observer: boolean;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface CountryDate {
  academic_year_start: MonthDay;
  fiscal_year_start: FiscalYearStart;
  start_of_week: string;
}

export interface MonthDay {
  day: number;
  month: number;
}

export interface FiscalYearStart {
  corporate: FiscalPeriod;
  government: MonthDay;
  personal: MonthDay;
}

export interface FiscalPeriod {
  basis: string;
  day: number;
  month: number;
}

export interface Demonyms {
  eng: GenderedName;
  fra?: GenderedName;
}

export interface GenderedName {
  f: string;
  m: string;
}

export interface Descriptions {
  long: string;
  short: string;
}

export interface Economy {
  gini_coefficient: { [key: string]: number };
}

export interface Language {
  bcp47: string;
  iso639_1: string;
  iso639_2b: string;
  iso639_2t: string;
  iso639_3: string;
  name: string;
  native_name: string;
}

export interface Links {
  google_maps: string;
  official: string;
  open_street_maps: string;
  wikipedia: string;
}

export interface Memberships {
  african_union: boolean;
  arab_league: boolean;
  asean: boolean;
  brics: boolean;
  commonwealth: boolean;
  eu: boolean;
  eurozone: boolean;
  g20: boolean;
  g7: boolean;
  nato: boolean;
  oecd: boolean;
  opec: boolean;
  schengen: boolean;
  un: boolean;
}

export interface NumberFormat {
  decimal_separator: string;
  thousands_separator: string;
}

export interface Parent {
  alpha_2: string;
  alpha_3: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface Units {
  measurement_system: string;
  temperature_scale: string;
}
