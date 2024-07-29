import { useState } from 'react';
import searchIcon from '/assets/search.png';
import './SearchBar.css';
import { apiRequest } from '../../utils/apiRequest';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ getWeather }) => {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setUserInput(e.target.value);
  };
  const getCoords = async cityName => {
    try {
      const cityLocation = await apiRequest({
        geolocation: true,
        cityName,
      });
      if (cityLocation.length > 0) {
        const coords = {
          lat: cityLocation[0].lat,
          lon: cityLocation[0].lon,
        };
        setError(false);
        return coords;
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e, cityName) => {
    e.preventDefault();
    const coords = await getCoords(cityName);
    if (coords) {
      const weatherReport = await getWeather(coords);
      navigate(`/weather/${weatherReport.id}`);
    }
  };

  return (
    <>
      <form
        id="search-form"
        role="search"
        onSubmit={e => handleSubmit(e, userInput)}
      >
        <input
          id="q"
          aria-label="Buscar por ciudad"
          placeholder="Buscar por ciudad"
          type="search"
          name="q"
          value={userInput}
          onChange={e => handleChange(e)}
        />

        <button type="submit">
          <img src={searchIcon} alt="Lupa" />
        </button>
      </form>
      {error && <p>Ciudad no encontrada</p>}
    </>
  );
};

export default SearchBar;
