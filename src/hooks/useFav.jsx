import { useContext, useEffect, useState } from 'react';
import { CoordsContext } from '../context/CoordsProvider';
import { addFav, removeFav } from '../reducers/weather.actions';
export const useFav = ({ weather, setSavedLocations }) => {
  const [fav, setFav] = useState(weather.isFav ?? false);
  const { state, dispatch } = useContext(CoordsContext);
  const { savedLocations } = state;

  const handleFavs = (weather, fav) => {
    if (fav) {
      console.log('Es fav', savedLocations);
      removeFav({ dispatch, newFav: weather, favList: savedLocations });
    } else {
      console.log('NO Es fav', savedLocations);
      weather.isFav = true;
      addFav({ dispatch, newFav: weather, favList: savedLocations });
    }
    setFav(fav => !fav);
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
