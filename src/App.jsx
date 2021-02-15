import React, { useState, useEffect } from "react";
// import axios from "axios";

import Header from "./componentsReusable/Header";
import Dropdown from "./componentsReusable/Dropdown";
import CurrentWeather from "./componentsContainer/CurrentWeather";
import CurrentWeatherDetails from "./componentsContainer/CurrentWeatherDetails";
import Forecast from "./componentsContainer/Forecast";
import citiesdata from "./cities.json";
import mountainview from "./mountain-view.json";
import CityDropdownData from "./models/CityDropdownData";

const TEXT = {
  HEADER_TITLE: "Welcome to Jane's Weather App!",
  DROPDOWN_LABEL: "Select Your City",
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
        const data = citiesdata;
        setCities(data);
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
          const data = mountainview;
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
  };

  return (
    <div className="container">
      <Header title={TEXT.HEADER_TITLE} />
      <Dropdown
        options={cities}
        dataFormatter={CityDropdownData}
        label={TEXT.DROPDOWN_LABEL}
        handleChange={handleDropdownChange}
        isSelected={selectedCity}
        isLoading={citiesIsLoading}
      />
      {cityWeatherIsLoading ? (
        <div>data is loading...</div>
      ) : (
        cityWeather && (
          <div className="row">
            <div className="col-lg">
              <CurrentWeather data={cityWeather} />
              <CurrentWeatherDetails data={cityWeather} />
            </div>
            <div className="col-lg">
              <Forecast data={cityWeather} />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
