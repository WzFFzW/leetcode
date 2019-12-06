/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;
  let top = 0;
  let res = [];
  let i = 1;
  for (let i = 0; i < n; i++) {
    res.push(new Array(n));
  }
  while (i <= n * n) {
    for (let tmp = left; tmp <= right; tmp++) {
      res[top][tmp] = i++;
    }
    top++;
    for (let tmp = top; tmp <= bottom; tmp++) {
      res[tmp][right] = i++;
    }
    right--;
    for (let tmp = right; tmp >= left; tmp--) {
      res[bottom][tmp] = i++;
    }
    bottom--;
    for (let tmp = bottom; tmp >= top; tmp--) {
      res[tmp][left] = i++;
    }
    left++;
  }
  return res;
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const directionMap = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let res = [];
  let i = 1;
  for (let i = 0; i < n; i++) {
    res.push(new Array(n));
  }
  const target = n * n;
  let direction = 0;
  let row = 0;
  let col = 0;
  while (i <= target) {
    res[row][col] = i++;
    let directionVal = directionMap[direction];
    if (row + directionVal[0] >= n || col + directionVal[1] >= n || !!res[row + directionVal[0]][col + directionVal[1]] || row + directionVal[0] < 0 || col + directionVal[1] < 0) {
      direction = (1 + direction) % 4;
      directionVal = directionMap[direction];
    }
    row += directionVal[0];
    col += directionVal[1];
  }
  return res;
};