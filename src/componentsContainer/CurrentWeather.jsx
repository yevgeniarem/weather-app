import React from "react";

function CurrentWeather({ data }) {
  const { location, current_observation } = data;

  return (
    <div className="current-weather-card">
      <h1 className="current-weather-card__title">{location.city}</h1>
      <h2 className="current-weather-card__subtitle">{location.country}</h2>
      <p className="current-weather-card__text">
        {current_observation.condition.text}
      </p>
      <p className="current-weather-card__text">
        {current_observation.condition.temperature}°F
      </p>
    </div>
  );
}

export default CurrentWeather;
