import React from "react";

function ForecastDay({ forecast }) {
  const { day, low, high, text } = forecast;
  return (
    <div className="container forecast-day">
      <div className="row">
        <div className="col-sm-3">
          <p>{day}</p>
        </div>
        <div className="col-sm-3">
          <p>{high}°F</p>
        </div>
        <div className="col-sm-3">
          <p>{low}°F</p>
        </div>
        <div className="col-sm-3">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ForecastDay;
