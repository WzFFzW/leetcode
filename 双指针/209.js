/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let left = 0;
  let right = left + 1;
  let res = nums.length + 1;
  while (left < nums.length - 1) {
    let sum = nums[left];
    while (sum < s) {
      sum += nums[right++];
    }
    if (sum >= s) {
      res = Math.min(res, right - left);
    }
    left++;
    right = left + 1;
  }
  return res === nums.length + 1? 0 : res;
};