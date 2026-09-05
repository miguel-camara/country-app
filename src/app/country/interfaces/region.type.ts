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
  Africa: '/assets/plates/map-africa.webp',
  Americas: '/assets/plates/map-americas.webp',
  Asia: '/assets/plates/map-asia.webp',
  Europe: '/assets/plates/map-europe.webp',
  Oceania: '/assets/plates/map-oceania.webp',
  Antarctic: '/assets/plates/map-antarctic.webp',
};

export const LOOKUP_MAP = '/assets/plates/map-lookup.webp';
