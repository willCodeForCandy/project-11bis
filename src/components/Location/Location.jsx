import MainWeather from '../MainWeather/MainWeather';
import './Location.css';

const Location = ({ locationWeather }) => {
  return (
    <li
      className="saved-location"
      style={{
        backgroundColor:
          locationWeather.clouds.all > 50 && 'var(--color-cloudy-day)',
        outlineColor:
          locationWeather.clouds.all > 50 && 'var(--color-cloudy-day)',
      }}
    >
      <MainWeather weather={locationWeather} />
    </li>
  );
};

export default Location;
