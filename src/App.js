import "./App.css";
import Search from "./components/search/search";
// import WeatherIcon from "./components/weatherIcons/weatherIcons";
import CurrentWeather from "./components/current-weather/current-weather";
// import DefaultWeather from "./components/default-weather/default-weather";
import Forecast from "./components/forecast/forecast";
import AirPollution from "./components/airpollution/airpollution";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airPollution, setAirPollution] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    const airPollutionFetch = fetch(
      `${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    )

    Promise.all([currentWeatherFetch, forecastFetch, airPollutionFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        const airPollutionResponse = await response[2].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        // setDefaultWeather({ city: searchData.label, ...defaultWeather });
    
        setAirPollution({city: searchData.label, ...airPollutionResponse});
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(currentWeather);
  console.log(forecast);
  console.log(airPollution);

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data = {forecast} />}
        {airPollution && <AirPollution data = {airPollution} />}
        {/* {searchData && <WeatherIcon iconID={weatherData.weather[0].icon} />} */}
        {/* {defaultWeather && <DefaultWeather data = {defaultWeather} />} */}
        <div className = "footer-info">
          <a href="https://github.com/Siwi0w0/weather-app">
              Source Code
          </a>{" "}
            | Developed by{" "}
            <a target="_blank" rel="noreferrer" href="https://github.com/Siwi0w0">
              Yufei Sun
            </a>{" "}
        </div>
      </div>
    </>
    
  );
}

export default App;
