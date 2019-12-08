/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = digits[i] + 1;
    if (num >= 10) {
      digits[i] = num % 10;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    } else {
      digits[i] = num;
      return digits;
    }
  }
};