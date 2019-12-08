/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const zeroRowMap = {};
  const zeroColMap = {};
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        zeroRowMap[i] = true;
        zeroColMap[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (zeroRowMap[i] || zeroColMap[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};