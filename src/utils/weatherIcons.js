export const weatherIcons = [
  {
    weatherCondition: 'sunny',
    img: '/assets/002-sunny.png',
    codes: [800, '01d'],
  },
  {
    weatherCondition: 'scattered clouds',
    img: '/assets/003-cloudy.png',
    codes: [801, 802, '02d', '03d'],
  },
  {
    weatherCondition: 'cloudy',
    img: '/assets/004-cloudy-1.png',
    codes: [803, 804, '04d', '04n'],
  },
  {
    weatherCondition: 'sunny drizzle',
    img: '/assets/010-rain.png',
    codes: [300, 301, 310, 321, 500, 521, '10d'],
  },
  {
    weatherCondition: 'heavy drizzle',
    img: '/assets/rain.png',
    codes: [302, 311, 312, 313, 314, 502, 503, 504, 522, 531, '09d', '09n'],
  },
  {
    weatherCondition: 'rain',
    img: '/assets/006-rainy.png',
    codes: [501],
  },
  {
    weatherCondition: 'freezing rain',
    img: '/assets/011-snow-1.png',
    codes: [511, 611, 612, 613, 615, 616],
  },
  {
    weatherCondition: 'snow',
    img: '/assets/005-snow.png',
    codes: [600, 601, 602, 620, 621, 622],
  },
  {
    weatherCondition: 'storm',
    img: '/assets/007-storm.png',
    codes: [200, 201, 202, 230, 231, 232],
  },
  {
    weatherCondition: 'thunder',
    img: '/assets/008-thunder.png',
    codes: [210, 211, 212, 221, '11d', '11n'],
  },
  {
    weatherCondition: 'clear night',
    img: '/assets/013-full-moon.png',
    codes: [800, '01n'],
    nightTime: true,
  },
  {
    weatherCondition: 'cloudy night',
    img: '/assets/022-moon.png',
    codes: [801, 802, '02n', '03n'],
    nightTime: true,
  },
  {
    weatherCondition: 'fog',
    img: '/assets/021-fog.png',
    codes: [701, 711, 721, 731, 741, 751, 761, 762, '50d', '50n'],
    nightTime: true,
  },
  {
    weatherCondition: 'unknown',
    img: '/assets/unknown.png',
    codes: [],
  },
];

export const findWeatherIcon = currentWeather => {
  const currentWeatherIcon =
    weatherIcons.find(iconObject =>
      iconObject.codes.includes(currentWeather.weather[0].id)
    ) || weatherIcons.at(-1);
  return currentWeatherIcon;
};

export const getRandomIcon = () =>
  weatherIcons[Math.floor(Math.random() * weatherIcons.length)].img;
