/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let left = 1;
  let right = nums.length - 1;
  while (left < right) {
    const mid = (left + right + 1) >>> 1;
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
      if (mid > nums[i]) {
        counter += 1;
      }
    }
    if (counter >= mid) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};