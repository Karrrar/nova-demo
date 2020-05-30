import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  queryByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BatchNumberValidator from "./BatchNumberValidator";

it("empty search show nothing", async () => {
  const { getByTestId, container } = render(<BatchNumberValidator />);
  const serachForm = await waitForElement(() => getByTestId("search-form"));
  expect(queryByTestId(container, "valid")).toBeNull();
  expect(queryByTestId(container, "invalid")).toBeNull();
});

it("Search for valid Batch Number", async () => {
  const { getByTestId } = render(<BatchNumberValidator />);
  const serachForm = await waitForElement(() => getByTestId("search-form"));
  userEvent.type(getByTestId("searchInput"), "valid");
  fireEvent.submit(getByTestId("search-form"));
  var valid = await waitForElement(() => getByTestId("valid"));
  expect(valid).toBeInTheDocument();
});

it("Search for invalid Batch Number", async () => {
  const { getByTestId } = render(<BatchNumberValidator />);
  const serachForm = await waitForElement(() => getByTestId("search-form"));
  userEvent.type(getByTestId("searchInput"), "invaild");
  fireEvent.submit(getByTestId("search-form"));
  await waitForElement(() => getByTestId("invalid"));
});
