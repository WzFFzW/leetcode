/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  /**
   * 1 是在最上面从左向右
   * 2 是在最右边从上往下
   * 3 是在最下面从右往左
   * 0 是在最下面从下往上
   */
  let action = 1;
  let res = [];
  while (matrix.length) {
    const direction = action % 4;
    if (direction === 1) {
      const arr = matrix.shift();
      if (arr.length) {
        res.push(...arr);
      }
    } else if (direction === 2) {
      const last_index = matrix[0].length - 1;
      for (let row = 0; row < matrix.length; row++) {
        const value = matrix[row].splice(last_index, 1)[0];
        if (value) {
          res.push(value);
        }
      }
    } else if (direction === 3) {
      const arr = matrix.pop();
      if (arr.length) {
        res.push(...arr.reverse());
      }
    } else if (direction === 0) {
      for (let row = matrix.length - 1; row > 0; row--) {
        const value = matrix[row].splice(0, 1)[0];
        if (value) {
          res.push(value);
        }
      }
    }
    action++;
  }
  return res;
};