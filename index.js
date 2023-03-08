//linear search
function linearSearch(array, x) {
  for (i in array) if (array[i] == x) return i;
  return -1;
}
result = linearSearch([2, 4, 1, 3, 7, 0], 1);
result == -1
  ? console.log("Element Not Found")
  : console.log("Element found at index: ", result);
//recursive binary search
function binarySearchRecursive(arr, low, high, x) {
  if (high >= low) {
    mid = Math.floor((high + low) / 2);
    if (arr[mid] == x) {
      return mid;
    } else if (arr[mid] > x) {
      return binarySearchRecursive(arr, low, mid - 1, x);
    } else return binarySearchRecursive(arr, mid + 1, high, x);
  } else return -1;
}
result = binarySearchRecursive([2, 3, 4, 10, 40], 0, 5, 10);
result == -1
  ? console.log("Element Not Found")
  : console.log("Element found at index: ", result);
//iterative binary Search
function binarySearchIterative(arr, x) {
  low = 0;
  high = arr.length - 1;
  mid = 0;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (arr[mid] < x) {
      low = mid + 1;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else return mid;
  }
  return -1;
}
result = binarySearchIterative([2, 3, 4, 10, 40], 40);
result == -1
  ? console.log("Element Not Found")
  : console.log("Element found at index: ", result);

module.exports = { linearSearch, binarySearchRecursive, binarySearchIterative };
