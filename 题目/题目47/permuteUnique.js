/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort();
  const res = [];
  let used = {};
  function backtrack(index, arr) {
    if (index === nums.length) {
      res.push(arr);
      return true;
    }
    for (let i = 0; i < nums.length; i++) {
      const value = nums[i];
      if (used[`${i}_${value}`]) {
        continue;
      }
      used[`${i}_${value}`] = 1;
      backtrack(index + 1, [...arr, value]);
      used[`${i}_${value}`] = 0;
      while (nums[i] === nums[i + 1]) {
        i++;
      }
    }
  }
  backtrack(0, []);
  return res;
};