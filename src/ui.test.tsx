import React from "react";
import { render } from "@testing-library/react";
import App, { query } from "./App";
import { MockedProvider } from '@apollo/client/testing';
import loans from './loans.mocks';

const settled = () => new Promise((resolve) => {
  setTimeout(resolve, 500);
})

const mocks = [
  {
    request: {
      query,
    },
    result: {
      data: {
        loans
      },
    },
  },
]

describe("UI Test Suite", () => {
  it("renders", () => {
    const { container } = render(
      <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
    );
    expect(container).toBeTruthy();
  });

  // TODO: Fix me!
  it("displays all data from loans", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
    );
    await settled();
    loans.forEach((loan) => {
      expect(container.innerHTML).toContain(loan.amount);
    });
  });
});
