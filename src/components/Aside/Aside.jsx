import { Link } from 'react-router-dom';
import Location from '../Location/Location';
import SearchBar from '../SearchBar/SearchBar';
import './Aside.css';

const Aside = ({ getWeather, listOfLocations }) => {
  return (
    <aside className="stitched">
      <SearchBar getWeather={getWeather} />
      <nav>
        <ul>
          {listOfLocations.length ? (
            listOfLocations.map(locationWeatherReport => (
              <Link
                to={`/weather/${locationWeatherReport.id}`}
                key={locationWeatherReport.id}
              >
                <Location locationWeather={locationWeatherReport} />
              </Link>
            ))
          ) : (
            <p>
              No hay ubicaciones guardadas. Puedes activar la geolocalización
              para obtener los datos de tu ubicación actual, o buscar la
              información de cualquier ciudad.
            </p>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
