import { createContext, useState } from 'react';

export const LocationsContext = createContext({
  prueba: [],
  setSavedLocations: () => null,
});

export const LocationsContextProvider = ({ children }) => {
  const [prueba, setSavedLocations] = useState();

  return (
    <LocationsContext.Provider value={{ prueba, setSavedLocations }}>
      {children}
    </LocationsContext.Provider>
  );
};
