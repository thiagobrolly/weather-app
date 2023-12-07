import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const apiKey = import.meta.env.VITE_API_KEY;

export function useFetchWeather() {
  const [selectedCity, setSelectedCity] = useState('');

  const {
    data: weatherData,
    isLoading,
    error,
  } = useQuery(['weather', selectedCity], async () => {
    if (selectedCity) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric&lang=pt_br`,
      );

      return response.data;
    }
  });

  return { weatherData, isLoading, error, setSelectedCity };
}
