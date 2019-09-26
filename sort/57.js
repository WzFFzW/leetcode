/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval]
  }
  if (newInterval[1] < intervals[0][0]) {
    return [newInterval, ...intervals];
  }
  if (newInterval[0] > intervals[intervals.length - 1][1]) {
    return [...intervals, newInterval];
  }
  const res = [];
  let i = 0;
  while (i < intervals.length && newInterval[0] > intervals[i][1]) {
    res.push(intervals[i]);
    i++;
  }
  let left = newInterval[0];
  let right = newInterval[1];
  while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
    left = Math.min(left, intervals[i][0]);
    right = Math.max(intervals[i][1], right);
    i++;
  }
  res.push([left, right]);
  while (i < intervals.length) {
    res.push(intervals[i]);
    i++;
  }
  return res;
};