/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const length = s.length;
  if (length === 1 || length === 0) {
    return s;
  }
  const dp = new Array(s.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length);
  }
  dp[0][0] = 1;
  for (let right = 1; right < s.length; right++) {
    for (let left = 0; left <= right; left++) {
      if (right - left === 1) {
        dp[left][right] = s[left] === s[right];
      } else if (left - right > 1) {
        dp[left][right] = s[left] === s[right] && dp[left + 1][right - 1];
      } else {
        dp[left][right] = true;
      }
    }
  }
  console.log(dp);
}