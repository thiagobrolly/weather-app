import { WeatherDetailDTO } from '../../dtos';
import { formatSunsetTime } from '../../utils/formatSunsetTime';
import { getWeatherIcon } from '../WeatherIcon';
import * as S from './styles';

export function WeatherDetail({ weatherData }: WeatherDetailDTO) {
  return (
    <S.Container>
      <S.VStack>
        <S.LeftContent>
          <S.TextName>{weatherData.name}</S.TextName>
          <img
            src={getWeatherIcon(weatherData.weather[0].description)}
            alt=""
          />
          <p>{weatherData.weather[0].description}</p>
          <div>
            <p>Min: {parseInt(weatherData.main.temp_min)}°C</p>
            <p>Max: {parseInt(weatherData.main.temp_max)}°C</p>
          </div>
        </S.LeftContent>

        <S.RightContent>
          <p>Temperatura: {parseInt(weatherData.main.temp)}°C</p>
          <p>Sensação Térmica: {parseInt(weatherData.main.feels_like)}°C</p>
          <p>Umidade: {weatherData.main.humidity}%</p>
          <p>Amanhecer: {formatSunsetTime(weatherData.sys.sunrise)}</p>
          <p>Pôr do sol: {formatSunsetTime(weatherData.sys.sunset)}</p>
        </S.RightContent>
      </S.VStack>
    </S.Container>
  );
}
