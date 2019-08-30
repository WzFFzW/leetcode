/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let i = 0;
  let res = 1;
  const map = {};
  while (i < nums.length) {
    const val = nums[i];
    if (val > 0) {
      map[val] = 1;
    }
    if (res === val) {
      while (map[++res]) {}
    }
    i++;
  }
  return res;
};
