import { render, screen } from "@testing-library/react";
import React from "react";

import TabsPicker from "./TabsPicker";

// TODO: add proper tests for TabsPicker component
test("TabsPicker renders properly", () => {
    render(<TabsPicker />);
    expect(screen.getByText("TabsPicker")).toBeInTheDocument();
});
