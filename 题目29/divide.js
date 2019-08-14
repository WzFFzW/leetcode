/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const sign = dividend > 0 && divisor > 0 || dividend < 0 && divisor < 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let dividend_binary = dividend.toString(2);
  let divisor_binary = divisor.toString(2);
  let i = 0;
  let mod = '';
  let res = '';
  while (i < dividend_binary.length) {
    const s = dividend_binary[i];
    if (+(mod + s) >= +divisor_binary) {
      mod = (parseInt(mod + s, '2') - divisor).toString(2);
      res += '1';
    }  else {
      res += '0';
      mod += s;
    }
    i++
  }
  res = parseInt(res, 2);
  res = sign ? res : -res;
  return Math.min(-(1 << 31) - 1, Math.max((1 << 31), res));
};