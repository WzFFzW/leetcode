/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  // 用户去重
  let res_sum = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const index = nums.indexOf(0 - nums[i] - nums[j]);
      if (index !== -1 && index !== i && index !== j && res_sum.indexOf(index + i + j) === 0) {
        res.push([i, j, index]);
      }
    }
  }
  return res.map((indexs) => [nums[indexs[0]], nums[indexs[1]], nums[indexs[2]]]);
};