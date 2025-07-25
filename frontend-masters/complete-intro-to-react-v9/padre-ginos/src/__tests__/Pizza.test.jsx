// We are gonna write a text such that we have alt text

import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

// We gonna learn more about writing tests with data-test-id

afterEach(cleanup);

test("alt test renders on image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const screen = render(
    <Pizza name="something else" description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
