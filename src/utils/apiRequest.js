export const apiRequest = async ({
  geolocation = false,
  cityName = '',
  coords = {},
}) => {
  let res;
  if (geolocation) {
    res = await fetch(
      `${import.meta.env.VITE_BASE_URL}geo/1.0/direct?q=${cityName}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`
    );
  } else {
    res = await fetch(
      `${import.meta.env.VITE_BASE_URL}data/2.5/weather?lat=${coords.lat}&lon=${
        coords.lon
      }&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&units=metric&lang=es`
    );
  }
  const data = await res.json();
  return data;
};
