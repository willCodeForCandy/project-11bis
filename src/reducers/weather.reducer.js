export const INITIAL_WEATHER_STATE = {
  coords: null, //son las coordenadas de la ubicacion que se muestra en Weather actualmente
  localCoords: null, //son las coordenadas de la ubicacion actual del usuario
  weather: null,
  savedLocations: [],
  loading: false,
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'GET_LOCAL_COORDS':
      return {
        ...state,
        localCoords: { ...action.payload },
        coords: { ...action.payload },
      };
    case 'GET_COORDS':
      return { ...state, coords: { ...action.payload } };
    case 'GET_WEATHER':
      return { ...state, weather: { ...action.payload }, loading: false };
    default:
      return { ...state };
  }
};
