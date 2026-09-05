export type Region =
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Antarctic';

export const ALL_REGIONS: Region[] = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
  'Antarctic',
];

export const REGION_LABELS: Record<Region, string> = {
  Africa: 'ÁFRICA',
  Americas: 'AMÉRICAS',
  Asia: 'ASIA',
  Europe: 'EUROPA',
  Oceania: 'OCEANÍA',
  Antarctic: 'ANTÁRTIDA',
};

export const REGION_MAPS: Record<Region, string> = {
  Africa: '/assets/plates/map-africa.png',
  Americas: '/assets/plates/map-americas.png',
  Asia: '/assets/plates/map-asia.png',
  Europe: '/assets/plates/map-europe.png',
  Oceania: '/assets/plates/map-oceania.png',
  Antarctic: '/assets/plates/map-antarctic.png',
};

export const LOOKUP_MAP = '/assets/plates/map-lookup.png';
