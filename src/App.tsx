import React from 'react';
import './App.css';
import useWeatherAPI, { WeatherResponseType } from './useWeatherAPI';

// eslint-disable-next-line require-jsdoc
function App() {
  const fetchWeather = useWeatherAPI();
  const [weather, setWeather] = React.useState<WeatherResponseType>();

  React.useEffect(() => {
    const result = async () => {
      const response = await fetchWeather();
      console.log(response);
      response && setWeather(() => response);
    };
    result();
  }, []);

  console.log(weather);
  return (
    <div className="App">
      <div>{weather?.targetArea}</div>
      <div>{weather?.text}</div>
      <div>{weather?.publishingOffice}</div>
      <div>{weather?.headlineText}</div>
      <div>{weather?.reportDatetime}</div>
    </div>
  );
}

export default App;
