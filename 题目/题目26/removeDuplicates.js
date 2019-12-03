/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let value = nums[0];
  for (let i = 1; i < nums.length;) {
    if (nums[i] === value) {
      nums.splice(i, 1);
    } else {
      value = nums[i];
      i++
    }
  }
  return nums.length;
};