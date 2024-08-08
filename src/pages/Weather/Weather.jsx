import { useNavigate, useParams } from 'react-router-dom';
import MainWeather from '../../components/MainWeather/MainWeather';
import './Weather.css';
import { memo, useContext, useEffect } from 'react';
import { CoordsContext } from '../../context/CoordsProvider';
import {
  getWeather,
  getWeatherFromSavedLocations,
} from '../../reducers/weather.actions';
import Loader from '../../components/Loader/Loader';
import FavBtn from '../../components/FavBtn/FavBtn';

const Weather = memo(() => {
  console.log('rendering Weather');
  const { state, dispatch } = useContext(CoordsContext);
  const { coords, weather, loading, savedLocations } = state;
  const params = useParams();

  useEffect(() => {
    if (coords) {
      getWeather({ dispatch, coords });
    }
  }, [coords]);

  useEffect(() => {
    const id = parseInt(params.id);
    const wantedLocation = savedLocations.find(location => location.id === id);

    if (wantedLocation) {
      dispatch({ type: 'SET_COORDS', payload: wantedLocation.coord });
    }
  }, [params]);

  return (
    <section
      id="main-weather"
      className="stitched"
      style={{
        backgroundColor: weather?.clouds.all > 50 && 'var(--color-cloudy-day)',
      }}
    >
      {loading && <Loader />}
      {weather && (
        <>
          <FavBtn weather={weather} />
          <MainWeather weather={weather} />
          <div className="additional-info">
            <ul>
              <li>
                <b>Viento:</b> {weather.wind.speed} m/s
              </li>
              <li>
                <b>Presión:</b> {weather.main.pressure} hPa
              </li>
              <li>
                <b>Humedad:</b> {weather.main.humidity} %
              </li>
              <li>
                <b>Nubosidad:</b> {weather.clouds.all} %
              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
});

export default Weather;
