const getLocalCoords = dispatch => {
  if (navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        dispatch({
          type: 'GET_LOCAL_COORDS',
          payload: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
        });
      },
      error => {
        setError(`Error obteniendo la ubicación: ${error}`);
      }
    );
  } else {
    setError('No es posible usar la geolocalización');
  }
};
