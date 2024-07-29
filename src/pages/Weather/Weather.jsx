import { useParams } from 'react-router-dom';
import MainWeather from '../../components/MainWeather/MainWeather';
import './Weather.css';

const Weather = ({ list }) => {
  const params = useParams();
  const localWeather = list.find(location => location.local);
  const defaultWeatherId = localWeather ? localWeather.id : list[0].id;
  const locationId = params.id || defaultWeatherId;
  const weather = list.find(location => location.id == locationId); // uso == porque params son strings

  return (
    <>
      {weather && (
        <section
          id="main-weather"
          className="stitched"
          style={{
            backgroundColor:
              weather.clouds.all > 50 && 'var(--color-cloudy-day)',
          }}
        >
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
        </section>
      )}
    </>
  );
};

export default Weather;
