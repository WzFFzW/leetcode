/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (map[val]) {
      map[val] += 1;
    } else {
      map[val] = 1;
    }
    if (map[val] > (nums.length / 2)) {
      return val;
    }
  }
};