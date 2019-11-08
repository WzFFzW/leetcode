/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const res = [[]];
  const len = nums.length;
  nums.sort();
  function _subsets(arr, index) {
    for (let i = index; i < len; i++) {
      const num = nums[i];
      const _arr = [...arr, num];
      if (!res.some((item) => item.length === _arr.length && item.every((v, index) => v === _arr[index]))) {
        res.push(_arr);
      }
      _subsets(_arr, i + 1);
    }
  }
  _subsets([], 0)
  return res;
};