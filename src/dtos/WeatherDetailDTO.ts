export interface WeatherProps {
  id: string;
  description: string;
}

export interface MainProps {
  feels_like: string;
  grnd_level: string;
  humidity: string;
  pressure: string;
  sea_level: string;
  temp: string;
  temp_max: string;
  temp_min: string;
}

export interface SysProps {
  sunrise: number;
  sunset: number;
}

export interface WeatherDetailDTO {
  weatherData: {
    id: string;
    name: string;
    main: MainProps;
    sys: SysProps;
    weather: WeatherProps[];
  };
}
