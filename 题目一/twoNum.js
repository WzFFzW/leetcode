/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let i = 0;
  while (i < nums.length) {
      const other_index = nums.indexOf(target - nums[i]);
      if (other_index > -1 && i !== other_index && nums.indexOf(target - nums[i], other_index) > -1) {
          return [i, other_index]
      }
      i++;
  }
  return [];
};