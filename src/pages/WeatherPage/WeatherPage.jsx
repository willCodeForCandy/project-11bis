import Weather from '../Weather/Weather';
import './WeatherPage.css';
import Aside from '../../components/Aside/Aside';
import { getLocalCoords, getWeather } from '../../reducers/weather.actions';
import { useFav } from '../../hooks/useFav';
import { useEffect, useContext } from 'react';
import { CoordsContext } from '../../context/CoordsProvider';

const WeatherPage = () => {
  console.log('Rendering WeatherPage');
  const { state, dispatch } = useContext(CoordsContext);

  const { savedLocations } = state;
  useEffect(() => {
    getLocalCoords(dispatch);
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAA');
  }, []);
  return (
    <div id="weather">
      <Aside listOfLocations={savedLocations} />
      <Weather />
    </div>
  );
};

export default WeatherPage;
