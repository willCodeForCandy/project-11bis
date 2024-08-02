export const INITIAL_WEATHER_STATE = {
  coords: null,
  localCoords: null,
  weather: null,
  savedLocations: [],
  loading: false,
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'GET_LOCAL_COORDS':
      return { ...state, localCoords: { ...action.payload } };
    case 'GET_COORDS':
      return { ...state, coords: { ...action.payload } };
    case 'GET_WEATHER':
      return { ...state, weather: { ...action.payload } };
    default:
      return { ...state };
  }
};
