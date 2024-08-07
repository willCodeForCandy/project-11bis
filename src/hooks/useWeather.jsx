// import { useContext, useEffect, useState } from 'react';
// import { LocationsContext } from '../context/context';
// import { apiRequest } from '../utils/apiRequest';
// import { updateWithoutDuplicates } from '../utils/listUpdater';
// import { useCoords } from './useCoords';

// export const useWeather = () => {
//   const [weather, setWeather] = useState();
//   const { savedLocations, setSavedLocations } = useContext(LocationsContext);
//   const { localCoords } = useCoords();
//   const getWeather = async coords => {
//     try {
//       if (coords) {
//         console.log('fetching weather for', coords);
//         const weatherReport = await apiRequest({ coords });
//         if (weatherReport) {
//           // const newWeather = {
//           //   id: weatherReport.id,
//           //   name: weatherReport.name,
//           //   country: weatherReport.country,
//           //   coords: {
//           //     lat: weatherReport.coord.lat,
//           //     lon: weatherReport.coord.lon,
//           //   },
//           //   temp: weatherReport.main.temp,
//           //   pressure: weatherReport.main.pressure,
//           //   humidity: weatherReport.main.humidity,
//           //   wind: weatherReport.wind.speed,
//           //   description: weatherReport.weather[0].description,
//           //   clouds: weatherReport.clouds.all,
//           //   weatherIcon: weatherReport.weather[0].id,
//           //   sunrise: weatherReport.sys.sunrise,
//           //   sunset: weatherReport.sys.sunset,
//           // };
//           // setWeather(weatherReport);
//           const updatedLocations = updateWithoutDuplicates(
//             weatherReport,
//             savedLocations
//           );
//           console.log(updatedLocations);
//           setSavedLocations(updatedLocations);
//           localStorage.setItem(
//             'savedLocations',
//             JSON.stringify(updatedLocations)
//           );
//           return weatherReport;
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     if (localCoords) {
//       getWeather(localCoords).then(weatherReport => {
//         setSavedLocations(prevLocations => {
//           const updatedLocations = prevLocations.map(location =>
//             location.id === weatherReport.id
//               ? { ...location, local: true }
//               : { ...location, local: false }
//           );
//           localStorage.setItem(
//             'savedLocations',
//             JSON.stringify(updatedLocations)
//           );
//           return updatedLocations;
//         });
//       });
//     }
//   }, [localCoords]);
//   return { weather, getWeather, setWeather };
// };
