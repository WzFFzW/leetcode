/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  function round_10(num) {
    return Math.round(num / 10);
  }
  const res = 0;
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -MAX - 1;
  while (x) {
    const pop = x % 10;
    if (res > round_10(MAX) || (res === round_10(MAX) && pop > 7)) {
      return 0;
    }
    if (res < round_10(MIN) || (res === round_10(MIN) && pop < -8)) {
      return 0;
    }
    x = round_10(x);
  }
  return res;
};

console.log(reverse(-312));