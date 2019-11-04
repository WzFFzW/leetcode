/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  function _combine(arr) {
    if (arr.length === k) {
      res.push(arr);
      return;
    }
    for (let i = 0; i <= n; i++) {
      arr.push(i);
      _combine([...arr]);
    }
  }
  _combine([]);
  console.log(res);
  return res;
};