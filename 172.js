/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let res = 0;
  while (n >= 5) {
    const tmp = Math.floor(n / 5);
    res += tmp;
    n = tmp;
  }
  return res;
};