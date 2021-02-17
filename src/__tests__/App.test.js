import React from "react";
import { render, screen, act } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import * as mockedLocalStorage from "../utils/localStorage";
import App, { CONSTANTS } from "../App";
import mockCities from "./mockData/cities.json";
import mockCity from "./mockData/city.json";

const selectedCity = "1";

jest.mock("../utils/localStorage");
const mock = new MockAdapter(axios);
mock.onGet("http://localhost:3001/cities").reply(200, mockCities);
mock.onGet(`http://localhost:3001/cities/${selectedCity}`).reply(200, mockCity);

describe("if no cities selected, should render only Header and Dropdown", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);
    });
  });

  test("should render Header", () => {
    expect(screen.getByText(CONSTANTS.HEADER_TITLE)).toBeInTheDocument();
  });

  test("should render Dropdown", () => {
    expect(screen.getByText(CONSTANTS.DROPDOWN_LABEL)).toBeInTheDocument();
  });

  test("should not render CurrentWeatherDetails", () => {
    expect(screen.queryByText("Details")).toBeNull();
  });

  test("should not render Forecast", () => {
    expect(screen.queryByText("Forecast")).toBeNull();
  });
});

describe("if local storage city exists, should render city details", () => {
  beforeEach(async () => {
    mockedLocalStorage.getLocalStorage.mockReturnValue(selectedCity);
    await act(async () => {
      render(<App />);
    });
  });

  test("should render CurrentWeatherDetails", () => {
    expect(screen.getByText("Details")).toBeInTheDocument();
  });

  test("should render Forecast", () => {
    expect(screen.getByText("Forecast")).toBeInTheDocument();
  });
});
