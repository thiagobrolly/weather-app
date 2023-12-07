import weatherClear from '../assets/icon/weather-clear.svg';
import weatherCloudy from '../assets/icon/weather-cloudy.svg';
import weatherFog from '../assets/icon/weather-fog.svg';
import weatherHail from '../assets/icon/weather-hail.svg';
import weatherLightningRainy from '../assets/icon/weather-lightning-rainy.svg';
import weatherLightning from '../assets/icon/weather-lightning.svg';
import weatherPartlyCloudy from '../assets/icon/weather-partly-cloudy.svg';
import weatherPouring from '../assets/icon/weather-pouring.svg';
import weatherSnowyHeavy from '../assets/icon/weather-snowy-heavy.svg';
import weatherSnowyRainy from '../assets/icon/weather-snowy-rainy.svg';
import weatherSnowy from '../assets/icon/weather-snowy.svg';

export const getWeatherIcon = (weather: string) => {
  let icon = '';

  console.log(weather);

  switch (weather) {
    case 'céu limpo':
      icon = weatherClear;
      break;
    case 'algumas nuvens':
      icon = weatherPartlyCloudy;
      break;
    case 'nuvens dispersas':
      icon = weatherPartlyCloudy;
      break;
    case 'nublado':
      icon = weatherCloudy;
      break;
    case 'chuva e neve misturadas':
      icon = weatherSnowyRainy;
      break;
    case 'chuva forte':
      icon = weatherLightningRainy;
      break;
    case 'chuva leve':
      icon = weatherPouring;
      break;
    case 'chuva moderada':
      icon = weatherPouring;
      break;
    case 'neblina':
      icon = weatherFog;
      break;
    case 'neve forte':
      icon = weatherSnowyHeavy;
      break;
    case 'neve leve':
      icon = weatherSnowy;
      break;
    case 'neve moderada':
      icon = weatherHail;
      break;
    case 'névoa':
      icon = weatherFog;
      break;
    case 'trovoada':
      icon = weatherLightning;
      break;
    default:
      break;
  }

  return icon;
};
