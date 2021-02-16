import React from "react";
import { render } from "@testing-library/react";

import CurrentWeather from "../componentsContainer/CurrentWeather";

test("renders correct content", () => {
  const testData = {
    city: "Los Angeles",
    country: "USA",
    condition: "sunny",
    temperature: 71,
  };
  const { getByText } = render(<CurrentWeather {...testData} />);

  getByText("Los Angeles");
  getByText("USA");
  getByText("sunny");
  getByText("71°F");
});
