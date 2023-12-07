export interface CityDTO {
  id: number;
  nome: string;
  'regiao-imediata': {
    'regiao-intermediaria': {
      UF: {
        nome: string;
      };
    };
  };
}