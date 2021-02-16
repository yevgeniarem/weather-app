import React from "react";
import PropTypes from "prop-types";

import TableRow from "../componentsReusable/TableRow";
import ForecastDayData from "../models/ForecastDayData";

function Forecast({ data }) {
  return (
    <div className="forecast-card">
      <h1 className="forecast-card__title">Forecast</h1>
      {data.map((forecast) => (
        <TableRow
          data={new ForecastDayData(forecast)}
          key={forecast.date}
          className="forecast-card__row"
        />
      ))}
    </div>
  );
}
Forecast.propTypes = {
  data: PropTypes.array,
};

Forecast.defaultProps = {
  data: [],
};

export default Forecast;
