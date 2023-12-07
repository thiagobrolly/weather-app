import { CityCard } from '../../components/CityCard/index.tsx';
import { Header } from '../../components//Header';
import { DefaultLayout } from '../../layouts/DefaultLayout/index.tsx';
import { WeatherDetail } from '../../components/WeatherDetail/index.tsx';
import { useFetchCities } from '../../hooks/useFetchCities.ts';
import { useFetchWeather } from '../../hooks/useFetchWeather.ts';
import * as S from './styles.ts';

export function Home() {
  const { cities, citiesLoading, displayedCities, setDisplayedCities } =
    useFetchCities();

  const { weatherData, isLoading, error, setSelectedCity } = useFetchWeather();

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
  };

  const handleSearch = (query: string) => {
    setSelectedCity('');
    const filtered = cities.filter((city) =>
      city.nome.toLowerCase().includes(query.toLowerCase()),
    );
    setDisplayedCities(filtered.slice(0, 18));
  };

  if (citiesLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <DefaultLayout>
      <Header onChange={handleSearch} />

      <S.HomeContainer>
        <S.HomeContent>
          {isLoading ? (
            <p>Carregando...</p>
          ) : weatherData ? (
            <WeatherDetail weatherData={weatherData} />
          ) : (
            <>
              <p>Selecione uma cidade para ver a previsão do tempo.</p>
              {error && <span>Error</span>}
            </>
          )}
        </S.HomeContent>
        <S.GridContainer>
          {displayedCities.map((city) => (
            <CityCard
              key={city.id}
              item={city}
              onClick={() => handleCityClick(city.nome)}
            />
          ))}
        </S.GridContainer>
      </S.HomeContainer>
    </DefaultLayout>
  );
}
