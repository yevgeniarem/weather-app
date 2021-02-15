import React from "react";
import classNames from "classnames";

function TableRow({ data, className }) {
  return (
    <div className={classNames("row", className)}>
      {Object.entries(data).map(([key, val]) => (
        <div className="col-sm" key={key}>
          <p>{val}</p>
        </div>
      ))}
    </div>
  );
}

export default TableRow;
