export const INITIAL_WEATHER_STATE = {
  coords: null, //son las coordenadas de la ubicacion que se muestra en Weather actualmente
  localCoords: null, //son las coordenadas de la ubicacion actual del usuario
  weather: null,
  savedLocations: JSON.parse(localStorage.getItem('savedLocations')) ?? [],
  loading: false,
  error: '',
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'SET_LOCAL_COORDS':
      return {
        ...state,
        localCoords: { ...action.payload },
        coords: { ...action.payload },
      };
    case 'SET_COORDS':
      return { ...state, coords: { ...action.payload } };
    case 'SET_WEATHER':
      return { ...state, weather: { ...action.payload }, loading: false };
    case 'MANAGE_FAVS':
      return { ...state, savedLocations: [...action.payload] };
    case 'ERROR':
      return { ...state, error: action.message };
    default:
      return { ...state };
  }
};
