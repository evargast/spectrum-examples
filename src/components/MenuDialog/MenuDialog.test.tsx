import { render, screen } from "@testing-library/react";
import React from "react";

import MenuDialog from "./MenuDialog";

// TODO: add proper tests for MenuDialog component
test("MenuDialog renders properly", () => {
    render(<MenuDialog />);
    expect(screen.getByText("MenuDialog")).toBeInTheDocument();
});
