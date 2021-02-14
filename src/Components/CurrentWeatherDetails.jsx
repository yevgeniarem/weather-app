import React from "react";

import data from "../data.json";

function CurrentWeatherDetails() {
  const { wind, atmosphere, condition } = data.current_observation;
  const today = data.forecasts[0];

  return (
    <div className="container">
      <h1>Details</h1>
      <p>Humidity: {atmosphere.humidity}%</p>
      <p>Visibility: {atmosphere.visibility}</p>
      <p>
        {condition.text} with a high of {today.high} °F and a low of {today.low}{" "}
        °F. Winds at {wind.speed} mph.
      </p>
    </div>
  );
}

export default CurrentWeatherDetails;
