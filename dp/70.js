/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;
  let cur = 3;
  while (cur <= n) {
    dp[cur] = dp[cur - 1] + dp[cur + 2];
    cur++;
  }
  return dp[n];
};