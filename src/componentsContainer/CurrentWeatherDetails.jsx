import React from "react";
import PropTypes from "prop-types";

function CurrentWeatherDetails({
  humidity,
  visibility,
  condition,
  wind,
  high,
  low,
}) {
  return (
    <div className="current-weather-details-card">
      <h1 className="current-weather-details-card__title">Details</h1>
      <p className="current-weather-details-card__text">
        Humidity: {humidity}%
      </p>
      <p className="current-weather-details-card__text">
        Visibility: {visibility}
      </p>
      <p className="current-weather-details-card__text">
        {condition} with a high of {high} °F and a low of {low} °F. Winds at{" "}
        {wind} mph.
      </p>
    </div>
  );
}

CurrentWeatherDetails.propTypes = {
  humidity: PropTypes.number,
  visibility: PropTypes.number,
  condition: PropTypes.string,
  wind: PropTypes.number,
  high: PropTypes.number,
  low: PropTypes.number,
};

CurrentWeatherDetails.defaultProps = {
  humidity: null,
  visibility: null,
  condition: null,
  wind: null,
  high: null,
  low: null,
};

export default CurrentWeatherDetails;
