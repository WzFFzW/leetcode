/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
  let res = 0;
  function queen(index, used) {
    if (index === n) {
      res++;
      return true;
    }
    for (let j = 0; j < n; j ++) {
      if (rowHasQueen(used, j) || columnHasQueen(used, index) || diagonalHasQueen(used, index, j) || oppositeHasQueen(used, index, j)) {
        continue;
      }
      used[index][j] = 1;
      queen(index + 1, used)
      used[index][j] = 0;
    }
    return false;
  }
  for (let i = 0; i < n; i++) {
    const used = generateArray(n);
    used[0][i] = 1;
    queen(1, used);
    used[0][i] = 0;
  }
  return res;
};
function generateArray(n) {
  let used = [];
  for (let i = 0; i < n; i++) {
    used[i] = new Array(n).fill(0);
  }
  return used;
}
function rowHasQueen(used, column) {
  for (let i = 0; i < used.length; i++) {
    if (used[i][column]) {
      return true;
    }
  }
  return false;
}

function columnHasQueen(used, row) {
  for (let i = 0; i < used.length; i++) {
    if (used[row][i]) {
      return true;
    }
  }
  return false;
}

function diagonalHasQueen(used, row, column) {
  const len = used.length;
  while (row > 0 && column > 0) {
    row--;
    column--;
  }
  while (row < len && column < len) {
    if (used[row][column]) {
      return true;
    }
    row++;
    column++;
  }
  return false;
}

function oppositeHasQueen(used, row, column) {
  const len = used.length;
  while (row > 0 && column < len) {
    row--;
    column++;
  }
  while (row < len && column > 0) {
    if (used[row][column]) {
      return true;
    }
    row++;
    column--;
  }
  return false;
}