export const formatSunsetTime = (sunsetValue: number): string => {
  const sunsetDate = new Date(sunsetValue * 1000); // Convertendo para milissegundos
    const hours = sunsetDate.getHours().toString().padStart(2, '0'); // Pegando as horas
    const minutes = sunsetDate.getMinutes().toString().padStart(2, '0'); // Pegando os minutos

    return `${hours}:${minutes}`;
};