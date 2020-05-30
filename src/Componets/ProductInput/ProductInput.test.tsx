import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  queryByTestId,
  getByText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductInput from "./ProductInput";

it("Prduct Name is Required", async () => {
  const { getByTestId, container } = render(<ProductInput />);
  const productInputForm = await waitForElement(() =>
    getByTestId("product-input-form")
  );
  fireEvent.submit(getByTestId("product-input-form"));
  await waitForElement(() => getByText(container, "Product Name is Required"));
});

it("Prduct Name most be more than 3 characters", async () => {
  const { getByTestId, container } = render(<ProductInput />);
  const productInputForm = await waitForElement(() =>
    getByTestId("product-input-form")
  );
  userEvent.type(getByTestId("productName"), "aa");
  fireEvent.submit(getByTestId("product-input-form"));
  await waitForElement(() =>
    getByText(container, "Product Name must be 3 characters or more")
  );
});
