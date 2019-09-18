/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const dp = [];
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  for (let i = 0; i < m; i++) {
    if (!dp[i]) {
      dp[i] = [];
    }
    for (let j = 0; j < n; j++) {
      const not_path = obstacleGrid[i][j];
      if (not_path) {
        dp[i][j] = 0;
      } else if (i === 0 && j === 0) {
        dp[0][0] = 1;
      } else {
        const top = i - 1 >= 0 ? dp[i - 1][j] : 0;
        const left = j - 1 >=0 ? dp[i][j - 1] : 0;
        dp[i][j] = top + left;
      }
    }
  }
  return dp[m - 1][n - 1];
};