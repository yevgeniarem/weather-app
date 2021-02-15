import React from "react";

function CurrentWeatherDetails({ data }) {
  const { wind, atmosphere, condition } = data.current_observation;
  const [today] = data.forecasts;

  return (
    <div className="current-weather-details-card">
      <h1 className="current-weather-details-card__title">Details</h1>
      <p className="current-weather-details-card__text">
        Humidity: {atmosphere.humidity}%
      </p>
      <p className="current-weather-details-card__text">
        Visibility: {atmosphere.visibility}
      </p>
      <p className="current-weather-details-card__text">
        {condition.text} with a high of {today.high} °F and a low of {today.low}{" "}
        °F. Winds at {wind.speed} mph.
      </p>
    </div>
  );
}

export default CurrentWeatherDetails;
