import { useEffect, useState } from 'react';
export const useFav = weather => {
  const [fav, setFav] = useState(weather.isFav ?? false);
  const [savedLocations, setSavedLocations] = useState(
    JSON.parse(localStorage.getItem('savedLocations')) ?? []
  );

  const handleFavs = (weather, fav) => {
    let favList = JSON.parse(localStorage.getItem('savedLocations')) ?? [];

    setFav(fav => !fav);

    if (fav) {
      favList = favList.filter(location => location.id !== weather.id);
    } else {
      weather.isFav = true;
      favList.unshift(weather);
    }
    setSavedLocations(favList);
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
