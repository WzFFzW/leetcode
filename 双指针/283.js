/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let index = 0;
  let i = 0;
  while (i < nums.length) {
    const val = nums[i];
    if (val === 0) {
      i++;
      continue;
    }
    nums[i] = nums[index];
    nums[index] = val;
    index++;
    i++;
  }
};