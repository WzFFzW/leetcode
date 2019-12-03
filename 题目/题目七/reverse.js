/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  function floor_10(num) {
    return parseInt(num / 10);
  }
  let res = 0;
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -MAX - 1;
  while (Math.abs(x) !== 0) {
    const pop = x % 10;
    if (res > floor_10(MAX) || (res === floor_10(MAX) && pop > 7)) {
      return 0;
    }
    if (res < floor_10(MIN) || (res === floor_10(MIN) && pop < -8)) {
      return 0;
    }
    res = res * 10 + pop;
    x = floor_10(x);
  }
  return res;
};

console.log(reverse(0));