/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const dp = [];
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    if (!dp[i]) {
      dp[i] = [];
    }
    for (let j = 0; j < n; j++) {
      const weight = grid[i][j];
      if (i === 0 && j === 0) {
        dp[0][0] = weight;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + weight;
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + weight;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + weight, dp[i][j - 1] + weight);
      }
    }
  }
  return dp[m - 1][n - 1];
};