import { strict as assert } from "node:assert";
import { test } from "node:test";
import { greet } from "../index.mjs";

test("greet returns personalized greeting for valid name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("greet trims whitespace around name", () => {
  assert.equal(greet("  Ada "), "Hello, Ada!");
});

test("greet returns friendly default for empty string", () => {
  assert.equal(greet(""), "Hello, friend!");
});

test("greet returns friendly default for whitespace-only string", () => {
  assert.equal(greet("   "), "Hello, friend!");
});
