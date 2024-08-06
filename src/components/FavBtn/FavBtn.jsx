import { useEffect, useState } from 'react';
import './FavBtn.css';

const FavBtn = ({ weather }) => {
  const [fav, setFav] = useState(weather.isFav ?? false);

  const handleFavs = (weather, fav) => {
    let favList = JSON.parse(localStorage.getItem('savedLocations')) ?? [];

    setFav(fav => !fav);

    if (fav) {
      favList = favList.filter(location => location.id !== weather.id);
    } else {
      weather.isFav = true;
      favList.unshift(weather);
    }

    localStorage.setItem('savedLocations', JSON.stringify(favList));
  };

  useEffect(() => {
    setFav(weather.isFav ?? false);
  }, [weather]);

  return (
    <button
      className={`fav-btn ${fav ? 'fav' : ''}`}
      onClick={() => {
        handleFavs(weather, fav);
      }}
    >
      {console.log(weather, fav)}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        // class="feather feather-heart"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
};

export default FavBtn;
