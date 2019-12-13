/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    const leftVal = s[left];
    const rightVal = s[right];
    if (leftVal !== rightVal) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};