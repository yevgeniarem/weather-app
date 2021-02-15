import React from "react";

import TableRow from "../componentsReusable/TableRow";
import ForecastDayData from "../models/ForecastDayData";

function Forecast({ data }) {
  return (
    <div className="forecast-card">
      <h1 className="forecast-card__title">Forecast</h1>
      {data.forecasts.map((forecast) => (
        <TableRow
          data={new ForecastDayData(forecast)}
          key={forecast.date}
          className="forecast-card__row"
        />
      ))}
    </div>
  );
}

export default Forecast;
