import React from "react";
import Form from "react-bootstrap/Form";

function Dropdown({
  options,
  label,
  handleChange,
  dataFormatter,
  isSelected,
  isLoading,
}) {
  return (
    <div className="dropdown">
      {isLoading ? (
        <div>data is loading...</div>
      ) : (
        <Form.Group>
          <Form.Label className="dropdown__label">{label}</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            className="dropdown__form-control"
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

export default Dropdown;
