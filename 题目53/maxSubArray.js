/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let i = 0;
  let pre = 0;
  while (i < nums.length) {
    if (pre > 0) {
      pre += nums[i];
    } else {
      pre = nums[i];
    }
    max = Math.max(pre, max);
    i++;
  }
  return max;
};