/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const sArr = s.split('');
  const ACharCode = 'A'.charCodeAt(0);
  let  res = 0;
  for (let i = 0; i < sArr.length; i++) {
    const power = sArr.length - i - 1;
    if (power !== 0) {
      res += Math.pow(26, power) * (s.charCodeAt(i) - ACharCode + 1);
    } else {
      res += (s.charCodeAt(i) - ACharCode + 1);
    }
  }
  return res;
};