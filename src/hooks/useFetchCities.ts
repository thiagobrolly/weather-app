import { useState } from 'react';
import { CityDTO } from '../dtos';
import axios from 'axios';
import { useQuery } from 'react-query';

export function useFetchCities() {
  const [cities, setCities] = useState<CityDTO[]>([]);
  const [displayedCities, setDisplayedCities] = useState<CityDTO[]>([]);

  const fetchCities = async () => {
    const response = await axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/municipios',
    );

    return response.data.map((city: CityDTO) => city);
  };

  const { isLoading: citiesLoading, error } = useQuery('cities', fetchCities, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setCities(data);
      const shuffledCities = [...data].sort(() => Math.random() - 0.5);
      setDisplayedCities(shuffledCities.slice(0, 18));
    },
  });

  return { cities, citiesLoading, error, displayedCities, setDisplayedCities };
}
