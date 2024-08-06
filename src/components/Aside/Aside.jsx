import { Link } from 'react-router-dom';
import Location from '../Location/Location';
import SearchBar from '../SearchBar/SearchBar';
import './Aside.css';
import { useContext } from 'react';
import { LocationsContext } from '../../context/context';
import { useFav } from '../../hooks/useFav';

const Aside = ({ listOfLocations }) => {
  // const { savedLocations } = useContext(LocationsContext);

  return (
    <aside className="stitched">
      <SearchBar />
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
