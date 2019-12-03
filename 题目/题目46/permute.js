/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  let used = {};
  function backtrack(index, arr) {
    if (index === nums.length) {
      res.push(arr);
      return true;
    }
    for (let i = 0; i < nums.length; i++) {
      const value = nums[i];
      if (used[value]) {
        continue;
      }
      used[value] = 1;
      backtrack(index + 1, [...arr, value]);
      used[value] = 0;
    }
  }
  backtrack(0, []);
  return res;
};