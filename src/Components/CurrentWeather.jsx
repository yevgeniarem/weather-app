import React from "react";

import data from "../data.json";

function CurrentWeather() {
  const { location, current_observation } = data;

  return (
    <div className="container current-weather">
      <h1>{location.city}</h1>
      <h2>{location.country}</h2>

      <p>{current_observation.condition.text}</p>
      <p>{current_observation.condition.temperature}°F</p>
    </div>
  );
}

export default CurrentWeather;
