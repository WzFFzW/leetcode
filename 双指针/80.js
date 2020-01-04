/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  while (i < nums.length - 2) {
    const val = nums[i];
    const nextVal = nums[i + 1];
    if (val === nextVal) {
      let j = i + 2;
      while (nums[j] === val) {
        nums.splice(j, 1);
      }
    }
    i++;
  }
  return nums.length;
};