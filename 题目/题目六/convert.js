/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const arr = [];
  let row_index = 0;
  let index = 0;
  let direction = false // true向下， false向上
  while (index < s.length) {
    arr[row_index] = arr[row_index] ? arr[row_index] + s[index] : s[index];
    if (row_index === 0 || row_index === numRows - 1) {
      direction = !direction;
    }
    row_index = direction ? row_index + 1 : row_index - 1;
    index++;
  }
  return arr.join('');
};