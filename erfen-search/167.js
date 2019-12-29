/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const val = numbers[left] + numbers[right];
    const mid = parseInt((left + right) / 2);
    if (val === target) {
      return [left + 1, right + 1];
    } else if (val > target) {
      right = mid;
    } else {
      left  = mid + 1;
    }
  }
};