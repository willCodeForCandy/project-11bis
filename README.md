# kawaiiWeather 2.0

Aplicación web del clima hecha con CSS y React

Los datos del clima fueron obtenidos de OpenWeather, usando 2 APIs:

- **Geolocation API**: devuelve las coordenadas de un lugar a partir del nombre de una ciudad y el código del país
  http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} + **opcional** lo puedo usar para que devuelva las posibles ciudades mientras el usuario está tipeando en el search

- **Current Weather Data**: devuelve la información del estado actual del tiempo a partir de unas coordenadas
  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

** DESPLIEGUE **

https://kawaii2-0.vercel.app/
