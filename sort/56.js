/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let i = 0;
  while (i < intervals.length) {
    let left = intervals[i][0];
    let right = intervals[i][1];
    while (i < intervals.length - 1 && right >= intervals[i + 1][0]) {
      i++;
      right = Math.max(intervals[i][1], right);
    }
    res.push([left, right]);
    i++;
  }
  return res;
};