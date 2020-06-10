import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  queryByTestId,
  getByText,
  waitForElementToBeRemoved,
  findAllByTestId,
  findAllByText,
  findByText,
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

// it("Experation Date", async () => {
//   const { getByTestId, container } = render(<ProductInput />);
//   const productInputForm = await waitForElement(() =>
//     getByTestId("product-input-form")
//   );
//   fireEvent.click(getByTestId("add-batchnumber-button"));
//   //await waitForElementToBeRemoved(getByTestId("add-batchnumber-button"));
//   const batchnumbers = await findAllByTestId(container, "expritionDate");
//   fireEvent.submit(getByTestId("product-input-form"));
//   const experiationDateError = await findAllByText(container, "Invalid Date");
//   expect(experiationDateError.length).toBe(1);
// });

it.only("Experation Date", async () => {
  const { getByTestId, findByText, container } = render(<ProductInput />);
  const productInputForm = await waitForElement(() =>
    getByTestId("product-input-form")
  );
  //await waitForElementToBeRemoved(getByTestId("add-batchnumber-button"));
  fireEvent.submit(getByTestId("product-input-form"));
  const experiationDateError = await waitForElement(() =>
    findByText("You need at less 1 batch number")
  );
});
