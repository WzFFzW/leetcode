/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let i = 1;
  const res = [];
  while (i <= numRows) {
    const _res = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        _res.push(1);
      } else {
        _res.push(res[i - 2][j - 1] + res[i - 2][j]);
      }
    }
    i++;
    res.push(_res);
  }
  return res;
};