/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let res = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const value = nums[mid];
    if (value === target) {
      res = mid;
      break;
    } else if (value < target) {
      left = mid + 1;
    } else if (value > target) {
      right = mid - 1;
    }
  }
  if (res === -1) {
    return [-1, -1]
  }
  left = res;
  right = res;
  while (nums[left - 1] === target) {
    left--;
  }
  while (nums[right + 1] === target) {
    right++;
  }
  return [Math.max(0, left), Math.min(right, nums.length - 1)];
};