import React from "react";
import { render, screen } from "@testing-library/react";

import CurrentWeatherDetails from "../componentsContainer/CurrentWeatherDetails";

const props = {
  humidity: 50,
  visibility: 10,
  condition: "Cloudy",
  wind: 33,
  high: 72,
  low: 49,
};

describe("should render CurrentWeatherDetails", () => {
  beforeEach(() => {
    render(<CurrentWeatherDetails {...props} />);
  });

  test("should render title", () => {
    expect(screen.getByText("Details")).toBeInTheDocument();
  });

  test("should render humidity", () => {
    expect(
      screen.getByText(props.humidity, { exact: false })
    ).toBeInTheDocument();
  });

  test("should render visibility", () => {
    expect(
      screen.getByText(props.visibility, { exact: false })
    ).toBeInTheDocument();
  });

  test("should render condition", () => {
    expect(
      screen.getByText(props.condition, { exact: false })
    ).toBeInTheDocument();
  });

  test("should render wind", () => {
    expect(screen.getByText(props.wind, { exact: false })).toBeInTheDocument();
  });

  test("should render high", () => {
    expect(screen.getByText(props.high, { exact: false })).toBeInTheDocument();
  });

  test("should render low", () => {
    expect(screen.getByText(props.low, { exact: false })).toBeInTheDocument();
  });
});
