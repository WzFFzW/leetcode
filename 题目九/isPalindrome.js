/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 暴力法
  // if (x < 0) {
  //   return false;
  // }
  // const x_reverse = (x + '').split('').reverse().join('');
  // return x == x_reverse;
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  let x_reverse = 0;
  while (x_reverse < x) {
    let pop = x % 10;
    x_reverse = x_reverse * 10 + pop;
    x = parseInt(x / 10);
  }
  return x == x_reverse || x == parseInt(x_reverse / 10);
};