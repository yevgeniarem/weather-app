import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../componentsReusable/Header";
import { CONSTANTS } from "../../src/App";

const props = {
  HEADER_TITLE: CONSTANTS.HEADER_TITLE,
};

describe("should render Header", () => {
  beforeEach(() => {
    render(<Header title={props.HEADER_TITLE} />);
  });

  test("should render title", () => {
    expect(screen.getByText(props.HEADER_TITLE)).toBeInTheDocument();
    expect(screen.getByTestId("header-title")).not.toEqual("");
  });
});
