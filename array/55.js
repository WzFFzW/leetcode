/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (max < i) {
      return false;
    }
    if (max + 1 >= nums.length) {
      return true;
    }
    max = Math.max(max, i + nums[i]);
  }
  return true;
};