import { useState, useEffect, useContext } from 'react';
import Weather from '../Weather/Weather';
import './WeatherPage.css';
import Aside from '../../components/Aside/Aside';
import Loader from '../../components/Loader/Loader';
import { LocationsContext } from '../../context';
import { useCoords } from '../../hooks/useCoords';
import { useWeather } from '../../hooks/useWeather';

const WeatherPage = () => {
  console.log('Rendering WeatherPage');
  const { savedLocations } = useContext(LocationsContext);
  const { getLocalCoords } = useCoords();

  useEffect(() => {
    getLocalCoords();
  }, []);

  return (
    <div id="weather">
      <Aside />
      <Weather />
    </div>
  );
};

export default WeatherPage;
