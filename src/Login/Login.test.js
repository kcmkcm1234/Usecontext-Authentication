import React from "react";
import {
	render,
	wait,
	queryByTestId,
	waitForElement,
	fireEvent
} from "@testing-library/react";
// import {} from '@testing-library/jest-dom'
// import {} from '@testing-library/dom'
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Login from "./Login";

function renderWithRouter(
	ui,
	{
		route = "/",
		history = createMemoryHistory({ initialEntries: [route] })
	} = {}
) {
	return {
		...render(<Router history={history}>{ui}</Router>),
		// adding `history` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		history
	};
}

test("should render login page correctly", () => {
	const { debug } = renderWithRouter(<Login />);
	debug();
});
