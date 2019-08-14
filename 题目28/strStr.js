/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // return haystack.indexOf(needle);
  if (!needle) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    let j = i;
    let k = 0;
    while (j < haystack.length && k < needle.length && needle[k] === haystack[j]) {
      j++;
      k++;
    }
    if (k === needle.length) {
      return i;
    }
  }
  return -1;
};