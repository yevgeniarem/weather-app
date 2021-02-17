import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./componentsReusable/Header";
import Dropdown from "./componentsReusable/Dropdown";
import CurrentWeather from "./componentsContainer/CurrentWeather";
import CurrentWeatherDetails from "./componentsContainer/CurrentWeatherDetails";
import Forecast from "./componentsContainer/Forecast";
import CityDropdownData from "./models/CityDropdownData";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import CurrentWeatherData from "./models/CurrentWeatherData";
import CurrentWeatherDetailsData from "./models/CurrentWeatherDetailsData";

export const CONSTANTS = {
  HEADER_TITLE: "Welcome to Jane's Weather App!",
  DROPDOWN_LABEL: "Select Your City",
  ENDPOINT: "http://localhost:3001/cities",
  LOCAL_STORAGE_KEY: "selectedCity",
};

function App() {
  const [cityWeather, setCityWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState(null);
  const [citiesIsLoading, setCitiesIsLoading] = useState(false);
  const [cityWeatherIsLoading, setCityWeatherIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setCitiesIsLoading(true);
        const { data } = await axios.get(CONSTANTS.ENDPOINT);
        setCities(data);
        const localStorageCity = getLocalStorage(CONSTANTS.LOCAL_STORAGE_KEY);
        if (localStorageCity) {
          setSelectedCity(localStorageCity);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setCitiesIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedCity) {
      (async () => {
        try {
          setCityWeatherIsLoading(true);
          const { data } = await axios.get(
            `${CONSTANTS.ENDPOINT}/${selectedCity}`
          );
          setCityWeather(data);
        } catch (err) {
          console.error(err);
        } finally {
          setCityWeatherIsLoading(false);
        }
      })();
    }
  }, [selectedCity]);

  const handleDropdownChange = (e) => {
    setSelectedCity(e.target.value);
    setLocalStorage(CONSTANTS.LOCAL_STORAGE_KEY, e.target.value);
  };

  return (
    <div className="container">
      <Header title={CONSTANTS.HEADER_TITLE} />
      <Dropdown
        options={cities}
        dataFormatter={CityDropdownData}
        label={CONSTANTS.DROPDOWN_LABEL}
        handleChange={handleDropdownChange}
        isSelected={!!selectedCity}
        isLoading={citiesIsLoading}
        defaultValue={getLocalStorage(CONSTANTS.LOCAL_STORAGE_KEY)}
      />
      {cityWeatherIsLoading ? (
        <div>data is loading...</div>
      ) : (
        cityWeather && (
          <div className="row">
            <div className="col-lg">
              <CurrentWeather {...new CurrentWeatherData(cityWeather)} />
              <CurrentWeatherDetails
                {...new CurrentWeatherDetailsData(cityWeather)}
              />
            </div>
            <div className="col-lg">
              <Forecast data={cityWeather.forecasts} />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
