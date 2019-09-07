/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length === 1 || nums.length === 0) {
    return 0;
  }
  let step = 0;
  let max = 0;
  let step_end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (step_end === i) {
      step_end = max;
      step++;
    }
  }
  return step;
};