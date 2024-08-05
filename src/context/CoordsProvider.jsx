import { createContext, useReducer } from 'react';
import {
  INITIAL_WEATHER_STATE,
  weatherReducer,
} from '../reducers/weather.reducer';

export const CoordsContext = createContext();

export const CoordsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, INITIAL_WEATHER_STATE);

  return (
    <CoordsContext.Provider value={{ state, dispatch }}>
      {children}
    </CoordsContext.Provider>
  );
};
