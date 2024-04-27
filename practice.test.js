const { upper, reverse, analyzeArray } = require("./practice");

test("upper", () => {
  const str = "veljko";
  expect(upper(str)).toBe("Veljko");
});

test("reverse", () => {
  const str = "Ja sam da";
  expect(reverse(str)).toBe("ad mas aJ");
});

test("One", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    avrage: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
