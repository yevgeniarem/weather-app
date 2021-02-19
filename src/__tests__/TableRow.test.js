import React from "react";
import { render, screen } from "@testing-library/react";

import TableRow from "../componentsReusable/TableRow";

const props = {
  day: "Mon",
  high: "90°F",
  low: "60°F",
  text: "Sunny",
};

describe("should render TableRow", () => {
  beforeEach(() => {
    render(<TableRow data={props} className="dummy-class" />);
  });

  test("should render day", () => {
    expect(screen.getByText(props.day)).toBeInTheDocument();
  });

  test("should render high", () => {
    expect(screen.getByText(props.high)).toBeInTheDocument();
  });

  test("should render low", () => {
    expect(screen.getByText(props.low)).toBeInTheDocument();
  });

  test("should render text", () => {
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
});
