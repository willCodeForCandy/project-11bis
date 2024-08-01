import { createContext, useState } from 'react';

export const LocationsContext = createContext({
  savedLocations: [],
  setSavedLocations: () => null,
  localCoords: { lat: 0, lon: 0 },
  setLocalCoords: () => null,
});

export const LocationsContextProvider = ({ children }) => {
  const [savedLocations, setSavedLocations] = useState(
    JSON.parse(localStorage.getItem('savedLocations')) ?? []
  );
  const [localCoords, setLocalCoords] = useState({ lat: 0, lon: 0 });

  return (
    <LocationsContext.Provider
      value={{ savedLocations, setSavedLocations, localCoords, setLocalCoords }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
