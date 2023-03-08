const {
  binarySearchIterative,
  binarySearchRecursive,
  linearSearch,
} = require("../../index");

describe("Search Algo Test", () => {
  it("should return index of element using linear search", () => {
    const result = linearSearch([2, 4, 1, 3, 7, 0], 1);
    expect(result).toEqual("2");
  });
  it("should return index of element using binary search recursive", () => {
    const result = binarySearchRecursive([2, 3, 4, 10, 40], 0, 5, 10);
    expect(result).toEqual(3);
  });
  it("should return index of element using binary search iterative", () => {
    const result = binarySearchIterative([2, 3, 4, 10, 40], 40);
    expect(result).toEqual(4);
  });
});
