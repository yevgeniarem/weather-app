import React from "react";
import PropTypes from "prop-types";

function CurrentWeather({ city, country, condition, temperature }) {
  return (
    <div className="current-weather-card">
      <h1 className="current-weather-card__title">{city}</h1>
      <h2 className="current-weather-card__subtitle">{country}</h2>
      <p className="current-weather-card__text">{condition}</p>
      <p className="current-weather-card__text">{temperature}°F</p>
    </div>
  );
}

CurrentWeather.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  condition: PropTypes.string,
  temperature: PropTypes.number,
};

CurrentWeather.defaultProps = {
  city: null,
  country: null,
  condition: null,
  temperature: null,
};

export default CurrentWeather;
