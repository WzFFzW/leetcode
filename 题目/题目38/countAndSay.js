/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n == 1) {
    return '1';
  }
  let init = '11';
  let res = '11';
  while (n > 2) {
    let i = 0;
    let count = 1;
    res = '';
    while (i < init.length) {
      if (init[i] === init[i + 1]) {
        count++;
      } else {
        res = res + count + init[i];
        count = 1;
      }
      i++
    }
    init = res;
    n--;
  }
  return res;
};