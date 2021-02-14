import React from "react";
import Form from "react-bootstrap/Form";

import data from "../data.json";

function Dropdown() {
  return (
    <div className="container dropdown">
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Your City</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Dropdown;
