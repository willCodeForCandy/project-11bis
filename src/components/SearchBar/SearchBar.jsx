import './SearchBar.css';
import { useContext, useRef } from 'react';
import searchIcon from '/assets/search.png';
import { CoordsContext } from '../../context/CoordsProvider';
import { getCityCoords } from '../../reducers/weather.actions';

const SearchBar = () => {
  console.log('rendering searchBar');
  const { dispatch } = useContext(CoordsContext);
  const searchInput = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const cityName = searchInput?.current.value;

    if (cityName) {
      console.log('submit', cityName);
      await getCityCoords({ dispatch, cityName });
    } else {
      dispatch({
        type: 'ERROR',
        message: 'Ingresa el nombre de una ciudad para buscar el clima',
      });
    }
  };

  return (
    <>
      <form id="search-form" role="search" onSubmit={e => handleSubmit(e)}>
        <input
          id="q"
          aria-label="Buscar por ciudad"
          placeholder="Buscar por ciudad"
          type="search"
          name="q"
          ref={searchInput}
        />

        <button type="submit">
          <img src={searchIcon} alt="Lupa" />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
