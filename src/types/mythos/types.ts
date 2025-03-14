export type Country =  {
  cca2: string;
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  flag?: string;
  region: string;
  subregion?: string;
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  borders?: string[];
  population: number;
  capital?: string[];
  latlng: [number, number];
}

export type CountryOption =  {
    value: string;
    label: string;
    flag: string;
  }
  
