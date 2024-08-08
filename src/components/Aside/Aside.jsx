import { Link } from 'react-router-dom';
import Location from '../Location/Location';
import SearchBar from '../SearchBar/SearchBar';
import './Aside.css';

const Aside = ({ listOfLocations }) => {
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
            <p>No hay ubicaciones guardadas.</p>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
