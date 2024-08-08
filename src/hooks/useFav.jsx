import { useContext, useEffect, useState } from 'react';
import { CoordsContext } from '../context/CoordsProvider';
export const useFav = ({ weather, setSavedLocations }) => {
  const [fav, setFav] = useState(weather.isFav ?? false);
  const { state, dispatch } = useContext(CoordsContext);
  const { savedLocations } = state;

  const handleFavs = (weather, fav) => {
    // let favList = JSON.parse(localStorage.getItem('savedLocations')) ?? [];

    setFav(fav => !fav);
    let favList = savedLocations;
    if (fav) {
      favList = savedLocations.filter(location => location.id !== weather.id);
    } else {
      weather.isFav = true;
      favList = [weather, ...savedLocations];
    }
    dispatch({ type: 'MANAGE_FAVS', payload: favList });
    localStorage.setItem('savedLocations', JSON.stringify(favList));
  };

  const checkFavStatus = (weather, list) => {
    if (list.find(location => location.id === weather.id)) {
      setFav(true);
    } else {
      setFav(false);
    }
  };

  useEffect(() => {
    checkFavStatus(weather, savedLocations);
  }, [weather?.id]);

  return { fav, handleFavs, savedLocations };
};
