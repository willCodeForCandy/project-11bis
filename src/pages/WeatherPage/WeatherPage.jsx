import { useState, useEffect, useContext } from 'react';
import Weather from '../Weather/Weather';
import './WeatherPage.css';
import Aside from '../../components/Aside/Aside';
import { CoordsContext } from '../../context/CoordsProvider';
import { getLocalCoords, getWeather } from '../../reducers/weather.actions';

const WeatherPage = () => {
  console.log('Rendering WeatherPage');

  const { state, dispatch } = useContext(CoordsContext);
  const { coords, weather } = state;

  useEffect(() => {
    getLocalCoords(dispatch);
  }, []);
  useEffect(() => {
    if (coords) {
      getWeather({ dispatch, coords });
    }
  }, [coords]);

  return (
    <div id="weather">
      {console.log(state)}
      <Aside />
      <Weather weather={weather} />
    </div>
  );
};

export default WeatherPage;
