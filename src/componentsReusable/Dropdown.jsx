import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

function Dropdown({
  options,
  label,
  handleChange,
  dataFormatter,
  isSelected,
  isLoading,
  defaultValue,
}) {
  return (
    <div className="dropdown">
      {isLoading ? (
        <div>data is loading...</div>
      ) : (
        <Form.Group className="dropdown__form">
          <Form.Label className="dropdown__label">{label}</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            className="dropdown__form-control"
            value={defaultValue}
          >
            <option defaultValue disabled={isSelected}>
              Choose...
            </option>
            {options &&
              options.map((option) => {
                const { id, displayName } = new dataFormatter(option);
                return (
                  <option key={id} value={id}>
                    {displayName}
                  </option>
                );
              })}
          </Form.Control>
        </Form.Group>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  handleChange: PropTypes.func,
  dataFormatter: PropTypes.func,
  isSelected: PropTypes.bool,
  isLoading: PropTypes.bool,
  defaultValue: PropTypes.string,
};

Dropdown.defaultProps = {
  options: [],
  label: null,
  handleChange: null,
  dataFormatter: null,
  isSelected: null,
  isLoading: null,
  defaultValue: null,
};

export default Dropdown;
