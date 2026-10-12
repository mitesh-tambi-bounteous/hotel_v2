import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppShell } from "./app-shell";

describe("AppShell", () => {
  it("renders the sidebar nav items and children", () => {
    render(
      <AppShell>
        <p>content</p>
      </AppShell>
    );

    expect(screen.getByText("Rooms")).toBeInTheDocument();
    expect(screen.getByText("Bookings")).toBeInTheDocument();
    expect(screen.getByText("Rates")).toBeInTheDocument();
    expect(screen.getByText("Guests")).toBeInTheDocument();
    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
