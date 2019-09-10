/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = [];
  function queen(index, used) {
    if (index === n) {
      res.push([...used]);
      return true;
    }
    for (let i = index; i < n; i++) {
      let count = 0;
      for (let j = 0; j < n; j ++) {
        if (rowHasQueen(used, j) || columnHasQueen(used, i) || diagonalHasQueen(used, i, j) || oppositeHasQueen(used, i, j)) {
          count++;
          continue;
        }
        used[i] = setQueen(used[i], j, 'Q');
        queen(index + 1, used)
        used[i] = setQueen(used[i], j, '.');
      }
      if (count === n) {
        return false;
      }
    }
    return false;
  }
  function generateArray(n) {
    let used = [];
    let str = '';
    let i = 0;
    while (i < n) {
      str += '.';
      i++;
    }
    for (let i = 0; i < n; i++) {
      used[i] = str;
    }
    return used;
  }
  for (let i = 0; i < n; i++) {
    const used = generateArray(n);
    used[0] = setQueen(used[0], i, 'Q');
    queen(1, used);
    used[0] = setQueen(used[0], i, '.');
  }
  return res;
};
function setQueen(pre_value, i, value) {
  const queens = pre_value.split('');
  queens[i] = value;
  return queens.join('');
}
function rowHasQueen(used, column) {
  for (let i = 0; i < used.length; i++) {
    if (used[i][column] === 'Q') {
      return true;
    }
  }
  return false;
}

function columnHasQueen(used, row) {
  for (let i = 0; i < used.length; i++) {
    if (used[row][i] === 'Q') {
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
    if (used[row][column] === 'Q') {
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
    if (used[row][column] === 'Q') {
      return true;
    }
    row++;
    column--;
  }
  return false;
}