/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  function search(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const mid = parseInt((left + right) / 2);
      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return false;
  }
  let i = 0;
  const m = matrix.length;
  const n = matrix[i].length;
  while (i < m) {
    const lastNum = matrix[i][n - 1];
    if (lastNum > target) {
      const isExist = search(matrix[i], target);
      if (isExist) {
        return isExist;
      }
    } else if (lastNum === target) {
      return true;
    }
    i++;
  }
  return false;
};
