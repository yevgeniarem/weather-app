import React from "react";

import Header from "./Components/Header";
import Dropdown from "./Components/Dropdown";
import CurrentWeather from "./Components/CurrentWeather";
import CurrentWeatherDetails from "./Components/CurrentWeatherDetails";
import Forecast from "./Components/Forecast";

function App() {
  return (
    <div>
      <Header />
      <Dropdown />
      <CurrentWeather />
      <CurrentWeatherDetails />
      <Forecast />
    </div>
  );
}

export default App;
