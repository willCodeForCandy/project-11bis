import { useContext, useEffect, useState } from 'react';
import { LocationsContext } from '../context';

export const useCoords = () => {
  const { localCoords, setLocalCoords } = useContext(LocationsContext);
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const [error, setError] = useState('');
  const getLocalCoords = () => {
    if (navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          setLocalCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        error => {
          setError(`Error obteniendo la ubicación: ${error}`);
        }
      );
    } else {
      setError('No es posible usar la geolocalización');
    }
  };

  const getCityCoords = async cityName => {
    try {
      const cityLocation = await apiRequest({
        cityName,
      });
      if (cityLocation.length > 0) {
        setCoords({
          lat: cityLocation[0].lat,
          lon: cityLocation[0].lon,
        });
        setError('');
      } else {
        setError('No se encontró una ubicación con ese nombre');
      }
    } catch (error) {
      setError(`Error buscando la ubicación: ${error}`);
    }
  };

  useEffect(() => {
    console.log('Cambiaron las coordenadas', coords);
  }, [coords]);
  return {
    coords,
    localCoords,
    getLocalCoords,
    getCityCoords,
    setCoords,
    error,
  };
};
