import { Link } from 'react-router-dom';
import Location from '../Location/Location';
import SearchBar from '../SearchBar/SearchBar';
import './Aside.css';
import { useContext } from 'react';
import { LocationsContext } from '../../context';

const Aside = ({ getWeather }) => {
  const { savedLocations } = useContext(LocationsContext);
  return (
    <aside className="stitched">
      <SearchBar getWeather={getWeather} />
      <nav>
        <ul>
          {savedLocations.length ? (
            savedLocations.map(locationWeatherReport => (
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
