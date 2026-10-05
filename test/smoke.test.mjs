import { strict as assert } from "node:assert";
import { test } from "node:test";
import { greet, farewell } from "../index.mjs";

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

test("farewell returns personalized farewell for valid name", () => {
  assert.equal(farewell("Ada"), "Goodbye, Ada!");
});

test("farewell trims whitespace around name", () => {
  assert.equal(farewell("  Ada "), "Goodbye, Ada!");
});

test("farewell returns friendly default for empty string", () => {
  assert.equal(farewell(""), "Goodbye, friend!");
});

test("farewell returns friendly default for whitespace-only string", () => {
  assert.equal(farewell("   "), "Goodbye, friend!");
});
