import { useParams } from 'react-router-dom';
import MainWeather from '../../components/MainWeather/MainWeather';
import './Weather.css';
import { useContext, useEffect } from 'react';
import { LocationsContext } from '../../context/context';
import Loader from '../../components/Loader/Loader';
import { CoordsContext } from '../../context/CoordsProvider';

const Weather = ({ weather }) => {
  console.log('rendering Weather');
  return (
    <section
      id="main-weather"
      className="stitched"
      style={{
        backgroundColor: weather?.clouds.all > 50 && 'var(--color-cloudy-day)',
      }}
    >
      {weather ? (
        <>
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
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Weather;

// const { savedLocations } = useContext(LocationsContext);
// const params = useParams();
// const localWeather = savedLocations.find(location => location.local);
// const defaultWeatherId = localWeather
//   ? localWeather.id
//   : savedLocations[0]?.id;
// const locationId = params.id || defaultWeatherId;
// const weather = savedLocations.find(location => location.id == locationId); // uso == porque params son strings
