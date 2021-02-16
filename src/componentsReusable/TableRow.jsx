import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function TableRow({ data, className }) {
  return (
    <div className={classNames("row", "table-row", className)}>
      {Object.entries(data).map(([key, val]) => (
        <div className="col-sm table-row__cell" key={key}>
          <p className="table-row__text">{val}</p>
        </div>
      ))}
    </div>
  );
}

TableRow.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
};

TableRow.defaultProps = {
  data: {},
  className: null,
};

export default TableRow;
