import React from "react";

import ForecastDay from "./ForecastDay";
import data from "../data.json";

function Forecast() {
  return (
    <div className="container">
      <h1>Forecast</h1>
      {data.forecasts.map((forecast) => {
        return <ForecastDay forecast={forecast} key={forecast.date} />;
      })}
    </div>
  );
}

export default Forecast;
