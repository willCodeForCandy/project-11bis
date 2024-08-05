import { createContext, useState } from 'react';

export const LocationsContext = createContext({
  savedLocations: [],
  setSavedLocations: () => null,
  localCoords: null,
  setLocalCoords: () => null,
});

export const LocationsContextProvider = ({ children }) => {
  const [savedLocations, setSavedLocations] = useState(
    JSON.parse(localStorage.getItem('savedLocations')) ?? []
  );
  // const [localCoords, setLocalCoords] = useState();

  return (
    <LocationsContext.Provider value={{ savedLocations, setSavedLocations }}>
      {children}
    </LocationsContext.Provider>
  );
};
