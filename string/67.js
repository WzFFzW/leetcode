/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let res = '';
  let isUp = false;
  while (i >= 0 && b >= 0) {
    let val;
    if (a[i] !== undefined && b[j] !== undefined) {
      val = +a[i--] + b[j--] + (isUp ? 1 : 0);
    } else if (a[i] === undefined) {
      val = +b[j--] + (isUp ? 1 : 0);
    } else if (b[j] === undefined) {
      val = +a[i--] + (isUp ? 1 : 0);
    }
    if (val > 1) {
      isUp = true;
      val = 1;
    } else {
      isUp = false;
    }
    res = val + res;
  }
  if (isUp) {
    res = '1' + res;
  }
  return res;
};