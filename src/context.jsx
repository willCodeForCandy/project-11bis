import { createContext, useState } from 'react';

export const LocationsContext = createContext({
  savedLocations: [],
  setSavedLocations: () => null,
});

export const LocationsContextProvider = ({ children }) => {
  const [savedLocations, setSavedLocations] = useState(
    JSON.parse(localStorage.getItem('savedLocations')) ?? []
  );

  return (
    <LocationsContext.Provider value={{ savedLocations, setSavedLocations }}>
      {children}
    </LocationsContext.Provider>
  );
};
