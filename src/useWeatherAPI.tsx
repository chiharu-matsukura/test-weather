import React from 'react';

const url =
  'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json';

export type WeatherResponseType = {
  publishingOffice: string;
  reportDatetime: string;
  targetArea: string;
  headlineText: string;
  text: string;
};

function useWeatherAPI() {
  const fetchAPI = async () => {
    try {
      const response = await fetch(url);
      console.log(response);
      const weather = await response.json();
      console.log(weather);
      return {
        publishingOffice: weather?.publishingOffice,
        reportDatetime: weather?.reportDatetime,
        targetArea: weather?.targetArea,
        headlineText: weather?.headlineText,
        text: weather?.headlineText,
      } as WeatherResponseType;
    } catch (e) {
      console.error(e);
    }
  };
  return fetchAPI;
}

export default useWeatherAPI;
