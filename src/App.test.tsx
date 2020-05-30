import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  queryByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import BatchNumberValidator from "./Componets/BatchNumberValidator/BatchNumberValidator";

it("empty test", () => {
  const { container } = render(<App />);
});
