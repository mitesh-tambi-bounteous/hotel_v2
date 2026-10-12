import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the guest web heading", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { name: "Guest Web" }),
    ).toBeInTheDocument();
  });
});
