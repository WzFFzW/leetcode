/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let i = 0;
  let blues = [];
  while (i < nums.length) {
    const color = nums[i];
    if (color === 0) {
      nums.splice(i, 1)
      nums.unshift(color);
      i++;
      continue;
    } else if (color === 2) {
      nums.splice(i, 1)
      blues.push(color);
      continue;
    }
    i++;
  }
  nums.push(...blues);
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let cur = 0;
  function switch_value (arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  while (cur <= right) {
    let color = nums[cur];
    if (color === 0) {
      switch_value(nums, cur, left);
      left++;
    } else if (color === 2) {
      switch_value(nums, cur, right);
      right--;
      continue;
    }
    cur++
  }
};