import React from "react";
import { render, screen } from "@testing-library/react";

import CurrentWeather from "../componentsContainer/CurrentWeather";

const props = {
  city: "Los Angeles",
  country: "USA",
  condition: "sunny",
  temperature: 71,
};

describe("should render CurrentWeather", () => {
  beforeEach(() => {
    render(<CurrentWeather {...props} />);
  });

  test("should render city", () => {
    expect(screen.getByText(props.city)).toBeInTheDocument();
  });

  test("should render country", () => {
    expect(screen.getByText(props.country)).toBeInTheDocument();
  });

  test("should render condition", () => {
    expect(screen.getByText(props.condition)).toBeInTheDocument();
  });

  test("should render temperature", () => {
    expect(
      screen.getByText(props.temperature, { exact: false })
    ).toBeInTheDocument();
  });
});
