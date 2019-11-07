/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const useBoard = [];
  for (let i = 0; i < board.length; i++) {
    useBoard[i] = new Array(board[i].length);
  }
  function _exist(row, col, index) {
    if (board[row][col] !== word[index]) { 
      return false;
    } else {
      useBoard[row][col] = true;
      if (index + 1 === word.length) {
        return true;
      }
    }
    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i];
      const nextRow = row + direction[0];
      const nextCol = col + direction[1];
      if (nextRow < 0 || nextRow > board.length - 1 || nextCol < 0 || nextCol > board[0].length - 1 || !!useBoard[nextRow][nextCol]) {
        continue;
      }
      const isMatch = _exist(nextRow, nextCol, index + 1);
      if (isMatch) {
        return true;
      }
    }
    useBoard[row][col] = false;
  }
  let isMatch = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (word.length === 1) {
          return true;
        }
        isMatch = _exist(i, j, 0);
        if (isMatch) {
          return true;
        }
      }
    }
  }
  return !!isMatch;
};