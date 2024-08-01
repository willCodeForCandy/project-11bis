import { useState, useEffect, useContext } from 'react';
import Weather from '../Weather/Weather';
import './WeatherPage.css';
import Aside from '../../components/Aside/Aside';
import { updateWithoutDuplicates } from '../../utils/listUpdater';
import { apiRequest } from '../../utils/apiRequest';
import Loader from '../../components/Loader/Loader';
import { LocationsContext } from '../../context';
import { useCoords } from '../../hooks/useCoords';
import { useWeather } from '../../hooks/useWeather';

const WeatherPage = () => {
  console.log('Rendering WeatherPage');
  const { savedLocations, setSavedLocations } = useContext(LocationsContext);
  const {
    coords,
    localCoords,
    getLocalCoords,
    getCityCoords,
    setCoords,
    error,
  } = useCoords();
  const {
    getWeather: getWeather2,
    weather: weather2,
    setWeather: setWeather2,
  } = useWeather();

  // const getLocalWeather = () => {
  //   if (navigator.geolocation) {
  //     window.navigator.geolocation.getCurrentPosition(
  //       position => {
  //         const coords = {
  //           lat: position.coords.latitude,
  //           lon: position.coords.longitude,
  //         };
  //         getWeather(coords).then(weatherReport => {
  //           setSavedLocations(prevLocations => {
  //             const updatedLocations = prevLocations.map(location =>
  //               location.id === weatherReport.id
  //                 ? { ...location, local: true }
  //                 : { ...location, local: false }
  //             );
  //             localStorage.setItem(
  //               'savedLocations',
  //               JSON.stringify(updatedLocations)
  //             );
  //             return updatedLocations;
  //           });
  //         });
  //       },
  //       error => {
  //         console.error('Error getting user location:', error);
  //       }
  //     );
  //   } else {
  //     alert('Geolocation is not supported by this browser.');
  //   }
  // };

  // const getWeather = async coords => {
  //   try {
  //     console.log('fetching weather for', coords);
  //     const weatherReport = await apiRequest({ coords });
  //     if (weatherReport) {
  //       const updatedLocations = updateWithoutDuplicates(
  //         weatherReport,
  //         savedLocations
  //       );
  //       setSavedLocations(updatedLocations);
  //       localStorage.setItem(
  //         'savedLocations',
  //         JSON.stringify(updatedLocations)
  //       );
  //       return weatherReport;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    getLocalCoords();
  }, []);

  return (
    <div id="weather">
      <Aside getWeather={getWeather2} />
      {savedLocations.length ? <Weather /> : <Loader />}
    </div>
  );
};

export default WeatherPage;
