/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  let row = 0;
  let column = 0;
  let row_used = [];
  let column_used = [];
  let box_used = [];
  while (row < board.length) {
    while (column < board[0].length) {
      const num = board[row][column];
      const box_index = parseInt(row / 3) * 3 + parseInt(column / 3);
      !box_used[box_index] && (box_used[box_index] = {});
      !row_used[row] && (row_used[row] = {});
      !column_used[column] && (column_used[column] = {});
      let flag = 1;
      if (num === '.') {
        flag = 0;
      }
      box_used[box_index][num] = flag;
      row_used[row][num] = flag;
      column_used[column][num] = flag;
      column++;
    }
    column = 0;
    row++;
  }
  function backStackSolveSudoku(row, column) {
    if (column === board[0].length) {
      column = 0;
      row++;
      if (row === board.length) {
        return true;
      }
    }
    const num = board[row][column];
    if (num === '.') {
      for (let i = 1; i <= 9; i++) {
        const box_index = parseInt(row / 3) * 3 + parseInt(column / 3);
        if (box_used[box_index][i] || row_used[row][i] || column_used[column][i]) {
          continue;
        }
        board[row][column] = i + '';
        box_used[box_index][i] = 1;
        row_used[row][i] = 1;
        column_used[column][i] = 1;
        if (backStackSolveSudoku(row, column + 1)) {
          return true;
        }
        board[row][column] = '.';
        box_used[box_index][i] = 0;
        row_used[row][i] = 0;
        column_used[column][i] = 0;
      }
    } else {
      return backStackSolveSudoku(row, column + 1);
    }
    return false;
  }
  backStackSolveSudoku(0, 0);
};