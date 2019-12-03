/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = 0;
  const hashMap = new Map();
  let res = 0;
  while (right < s.length) {
      const str = s[right];
      if (hashMap.has(str)) {
          let old_left = left;
          left = hashMap.get(str) + 1;
          while (old_left < left) {
              hashMap.delete(s[old_left++]);
          }
      } else {
          hashMap.set(str, right);
          right++;
      }
      res = Math.max(res, right - left);
  }
  return res;
};