import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import About from './pages/About/About.jsx';
import WeatherPage from './pages/WeatherPage/WeatherPage.jsx';
import Weather from './pages/Weather/Weather.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<WeatherPage />} />
        <Route path="/weather" element={<WeatherPage />}>
          <Route path="/weather/:id" element={<Weather />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
