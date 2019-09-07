/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    matrix[n + i] = [];
    for (let j = 0; j < n; j++) {
      matrix[n + i][j] = matrix[n - j][i];
    }
  }
  return matrix;
};