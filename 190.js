/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  const radixArr = n.toString(2).split('');
  while (radixArr.length < 32) {
    radixArr.unshift('0');
  }
  const radix = radixArr.reverse().join('');
  return parseInt(radix, 2);
};
