/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  if (m === 0) {
    return false;
  }
  const n = matrix[0].length;
  if (n === 0) {
    return false;
  }
  for (let i = 0; i < m; i++) {
    if (target > matrix[i][n - 1]) {
      continue;
    }
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
    return false;
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  if (m === 0) {
    return false;
  }
  const n = matrix[0].length;
  if (n === 0) {
    return false;
  }
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    const middle = ~~((left + right) / 2);
    const row = ~~(middle / n);
    const col = middle % n;
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    res = [...res, ...matrix[i]];
  }
  return res.includes(target);
};