import Weather from '../Weather/Weather';
import './WeatherPage.css';
import Aside from '../../components/Aside/Aside';
import { getLocalCoords } from '../../reducers/weather.actions';
import { useEffect, useContext } from 'react';
import { CoordsContext } from '../../context/CoordsProvider';

const WeatherPage = () => {
  console.log('Rendering WeatherPage');
  const { state, dispatch } = useContext(CoordsContext);
  const { savedLocations } = state;

  useEffect(() => {
    getLocalCoords(dispatch);
  }, []);

  return (
    <div id="weather">
      <Aside listOfLocations={savedLocations} />
      <Weather />
    </div>
  );
};

export default WeatherPage;
