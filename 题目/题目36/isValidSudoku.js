/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let row = [];
  let column = [];
  let box = [];
  let i = 0;
  while (i < board.length) {
    let j = 0;
    while (j < board[i].length) {
      const val = board[i][j];
      if (val === '.') {
        j++;
        continue;
      }
      // 先判断行
      if (!row[j]) {
        row[j] = {};
      }
      if (row[j][val]) {
        return false;
      }
      row[j][val] = 1;
      // 判断列
      if (!column[i]) {
        column[i] = {};
      }
      if (column[i][val]) {
        return false;
      }
      column[i][val] = 1;
      // 判断3 * 3盒子
      const box_index = parseInt(i / 3) * 3 + parseInt(j / 3);
      if (!box[box_index]) {
        box[box_index] = {};
      }
      if (box[box_index][val]) {
        return false;
      }
      box[box_index][val] = 1;
      j++;
    }
    i++;
  }
  return true
};