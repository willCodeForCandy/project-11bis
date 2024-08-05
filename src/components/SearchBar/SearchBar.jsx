import { useContext, useEffect, useState } from 'react';
import searchIcon from '/assets/search.png';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import { CoordsContext } from '../../context/CoordsProvider';
import { getCityCoords } from '../../reducers/weather.actions';

const SearchBar = () => {
  console.log('rendering searchBar');
  const { state, dispatch } = useContext(CoordsContext);
  const [userInput, setUserInput] = useState('');
  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e, cityName) => {
    e.preventDefault();
    console.log('submit', cityName);
    await getCityCoords({ dispatch, cityName });
  };

  return (
    <>
      {console.log(state)}
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
      {/* {error && <p>Ciudad no encontrada</p>} */}
    </>
  );
};

export default SearchBar;

// const { getWeather, weather, setWeather } = useWeather();
// // const { getCityCoords, coords, setCoords } = useCoords();
// const [userInput, setUserInput] = useState('');

// const navigate = useNavigate();

// const handleChange = e => {
//   setUserInput(e.target.value);
// };

// const handleSubmit = async (e, cityName) => {
//   e.preventDefault();
//   console.log('submit', cityName);
//   setCoords(await getCityCoords(cityName));
// };
// const fetchWeather = async coords => {
//   setWeather(await getWeather(coords));
//   console.log('fetching weather from searchBar');
// };
// useEffect(() => {
//   // fetchWeather(coords);
//   getWeather(coords);
// }, [coords]);
// useEffect(() => {
//   navigate(`/weather/${weather?.id}`);
//   console.log(weather);
// }, [weather]);
