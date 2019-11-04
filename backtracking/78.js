/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [[]];
  const len = nums.length;
  function _subsets(arr, index) {
    if (arr.length === len) {
      res.push(arr);
      return true;
    }
    for (let i = index; i < len; i++) {
      const num = nums[i];
      if (arr.includes(num)) {
        continue;
      }
      const isPush = _subsets([...arr, num], i + 1);
      !isPush && res.push([...arr, num]);
    }
  }
  _subsets([], 0)
  return res;
};