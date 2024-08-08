import { apiRequest } from '../utils/apiRequest';

export const getLocalCoords = dispatch => {
  if (navigator.geolocation) {
    dispatch({ type: 'LOADING' });

    window.navigator.geolocation.getCurrentPosition(
      position => {
        dispatch({ type: 'ERROR', message: '' });
        dispatch({
          type: 'SET_LOCAL_COORDS',
          payload: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
        });
      },
      error => {
        dispatch({ type: 'ERROR', message: 'Error obteniendo la ubicación' });
        console.error(`Error obteniendo la ubicación: ${error}`);
      }
    );
  } else {
    dispatch({
      type: 'ERROR',
      message: 'No es posible usar la geolocalización',
    });
    console.error(`No es posible usar la geolocalización`);
  }
};

export const getCityCoords = async ({ dispatch, cityName }) => {
  dispatch({ type: 'LOADING' });
  const cityLocation = await apiRequest({
    cityName,
  });

  if (cityLocation?.length > 0) {
    dispatch({
      type: 'SET_COORDS',
      payload: {
        lat: cityLocation[0].lat,
        lon: cityLocation[0].lon,
      },
    });
  } else {
    dispatch({
      type: 'ERROR',
      message: 'No se encontró una ubicación con ese nombre',
    });
  }
};

export const getWeather = async ({ dispatch, coords }) => {
  if (coords) {
    dispatch({
      type: 'ERROR',
      message: '',
    });
    console.log('getting weather for', coords);
    const weatherReport = await apiRequest({ coords });
    dispatch({ type: 'SET_WEATHER', payload: weatherReport });
  }
};

export const getWeatherFromSavedLocations = ({
  dispatch,
  id,
  savedLocations,
}) => {
  const wantedLocation = savedLocations.find(location => location.id === id);
  if (wantedLocation) {
    dispatch({ type: 'SET_WEATHER', payload: wantedLocation });
  }
};
