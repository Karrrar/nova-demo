import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  queryByTestId,
  getByText,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomerInput from "./CustomerInput";

it("First Name is Required", async () => {
  const { getByTestId, container } = render(<CustomerInput />);
  const customerInputForm = await waitForElement(() =>
    getByTestId("customer-input-form")
  );
  fireEvent.submit(getByTestId("customer-input-form"));
  await waitForElement(() => getByText(container, "First Name is Required"));
  userEvent.type(getByTestId("firstName"), "test");
  await waitForElementToBeRemoved(() =>
    getByText(container, "First Name is Required")
  );
});

it("First Name Name most be more than 3 characters", async () => {
  const { getByTestId, container } = render(<CustomerInput />);
  const customerInputForm = await waitForElement(() =>
    getByTestId("customer-input-form")
  );
  fireEvent.submit(getByTestId("customer-input-form"));
  userEvent.type(getByTestId("firstName"), "te");
  await waitForElement(() =>
    getByText(container, "First Name Name most be more than 3 characters")
  );
  userEvent.type(getByTestId("firstName"), "test");
  await waitForElementToBeRemoved(() =>
    getByText(container, "First Name Name most be more than 3 characters")
  );
});

it("Second Name is Required", async () => {
  const { getByTestId, container } = render(<CustomerInput />);
  const customerInputForm = await waitForElement(() =>
    getByTestId("customer-input-form")
  );
  fireEvent.submit(getByTestId("customer-input-form"));
  await waitForElement(() => getByText(container, "Second Name is Required"));
  userEvent.type(getByTestId("secondName"), "test");
  await waitForElementToBeRemoved(() =>
    getByText(container, "Second Name is Required")
  );
});

it("Second Name most be more than 3 characters", async () => {
  const { getByTestId, container } = render(<CustomerInput />);
  const customerInputForm = await waitForElement(() =>
    getByTestId("customer-input-form")
  );
  fireEvent.submit(getByTestId("customer-input-form"));
  userEvent.type(getByTestId("secondName"), "te");
  await waitForElement(() =>
    getByText(container, "Second Name most be more than 3 characters")
  );
  userEvent.type(getByTestId("secondName"), "test");
  await waitForElementToBeRemoved(() =>
    getByText(container, "Second Name most be more than 3 characters")
  );
});

it("Third Name is Required", async () => {
  const { getByTestId, container } = render(<CustomerInput />);
  const customerInputForm = await waitForElement(
    () => getByTestId("customer-input-form"),
    { timeout: 100 }
  );
  fireEvent.submit(getByTestId("customer-input-form"));
  await waitForElement(() => getByText(container, "Third Name is Required"), {
    timeout: 100,
  });
  userEvent.type(getByTestId("thirdName"), "test");
  await waitForElementToBeRemoved(
    () => getByText(container, "Third Name is Required"),
    { timeout: 100 }
  );
});

it("Third Name most be more than 3 characters", async () => {
  const { getByTestId, container } = render(<CustomerInput />);
  const customerInputForm = await waitForElement(
    () => getByTestId("customer-input-form"),
    { timeout: 100 }
  );
  fireEvent.submit(getByTestId("customer-input-form"));
  userEvent.type(getByTestId("thirdName"), "te");
  await waitForElement(
    () => getByText(container, "Third Name most be more than 3 characters"),
    { timeout: 100 }
  );
  userEvent.type(getByTestId("thirdName"), "test");
  await waitForElementToBeRemoved(
    () => getByText(container, "Third Name most be more than 3 characters"),
    { timeout: 100 }
  );
});

it("Fourth Name is Required", async () => {
  const { getByTestId, container } = render(<CustomerInput />);
  const customerInputForm = await waitForElement(
    () => getByTestId("customer-input-form"),
    { timeout: 100 }
  );
  fireEvent.submit(getByTestId("customer-input-form"));
  await waitForElement(() => getByText(container, "Fourth Name is Required"), {
    timeout: 100,
  });

  userEvent.type(getByTestId("fourthName"), "test");
  await waitForElementToBeRemoved(
    () => getByText(container, "Fourth Name is Required"),
    { timeout: 100 }
  );
});

it("Family Name is Required", async () => {
  const { getByTestId, container } = render(<CustomerInput />);
  const customerInputForm = await waitForElement(
    () => getByTestId("customer-input-form"),
    { timeout: 100 }
  );
  fireEvent.submit(getByTestId("customer-input-form"));
  await waitForElement(() => getByText(container, "Family Name is Required"), {
    timeout: 100,
  });

  userEvent.type(getByTestId("familyName"), "test");
  await waitForElementToBeRemoved(
    () => getByText(container, "Family Name is Required"),
    { timeout: 100 }
  );
});
