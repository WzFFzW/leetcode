/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  function _combine(arr, index) {
    if (arr.length === k) {
      res.push(arr);
      return;
    }
    for (let i = index; i <= n; i++) {
      if (arr.includes(i)) {
        continue;
      }
      _combine([...arr, i], i);
    }
  }
  _combine([], 1);
  return res;
};