import { useEffect, useState } from 'react';
import searchIcon from '/assets/search.png';
import './SearchBar.css';
import { apiRequest } from '../../utils/apiRequest';
import { useNavigate } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import { useCoords } from '../../hooks/useCoords';

const SearchBar = () => {
  {
    console.log('rendering searchBar');
  }
  const { getWeather, weather, setWeather } = useWeather();
  const { getCityCoords, coords, setCoords } = useCoords();
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e, cityName) => {
    e.preventDefault();
    console.log('submit', cityName);
    setCoords(await getCityCoords(cityName));

    // console.log('fetching weather from searchBar');
    // await getWeather(coords);
    // navigate(`/weather/${weather.id}`);
  };
  const fetchWeather = async coords => {
    setWeather(await getWeather(coords));
    console.log('fetching weather from searchBar');
  };
  useEffect(() => {
    fetchWeather(coords);
  }, [coords]);
  useEffect(() => {
    navigate(`/weather/${weather?.id}`);
  }, [weather]);

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
