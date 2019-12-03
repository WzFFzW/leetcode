/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const num = str.trim().match(/^[\-\+]?\d+/);
  if (!num) {
    return 0;
  }
  return Math.max(Math.min(Math.pow(2, 31) - 1, num), -Math.pow(2, 31));
};