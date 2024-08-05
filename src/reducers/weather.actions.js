import { apiRequest } from '../utils/apiRequest';

export const getLocalCoords = dispatch => {
  if (navigator.geolocation) {
    dispatch({ type: 'LOADING' });

    window.navigator.geolocation.getCurrentPosition(
      position => {
        dispatch({
          type: 'GET_LOCAL_COORDS',
          payload: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
        });
      }
      // ,
      // error => {
      //   setError(`Error obteniendo la ubicación: ${error}`);
      // }
    );
  }
  // else {
  //   setError('No es posible usar la geolocalización');
  // }
};

export const getCityCoords = async ({ dispatch, cityName }) => {
  dispatch({ type: 'LOADING' });
  const cityLocation = await apiRequest({
    cityName,
  });
  if (cityLocation.length > 0) {
    dispatch({
      type: 'GET_COORDS',
      payload: {
        lat: cityLocation[0].lat,
        lon: cityLocation[0].lon,
      },
    });
  }
  // } else {
  //   setError('No se encontró una ubicación con ese nombre');
  // }
};

export const getWeather = async ({ dispatch, state }) => {
  const { coords, localCoords } = state;
  if (coords) {
    const weatherReport = await apiRequest({ coords });
    dispatch({ type: 'GET_WEATHER', payload: weatherReport });
  }
};
