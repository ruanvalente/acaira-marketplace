import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/(public)/page";

describe("Home", () => {
  it("renders title", () => {
    render(<Home />);
    expect(screen.getByText("Ver-o-Preço")).toBeDefined();
  });
});
