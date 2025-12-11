import { it, expect, describe } from "vitest";
import formatMoney from "./money";

//it = creates a test.
//expect = lets us check if the result is correct.
//describe = groups tests together.
//group of tests = test suite

describe("formatMoney", () => {
  //name of the test
  it("formats 1999 cents as $19.99", () => {
    expect(formatMoney(1999)).toBe("$19.99");
  });

  //create another test
  it("displays 2 decimals", () => {
    expect(formatMoney(1090)).toBe("$10.90");
    expect(formatMoney(100)).toBe("$1.00");
  });
});
