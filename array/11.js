/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let max = 0;
  while (left < height.length - 1) {
    let right = left + 1;
    while (right < height.length) {
      const area = (right - left) * Math.min(height[left], height[right]);
      max = Math.max(max, Math.abs(area));
      right++;
    }
    left++;
  }
  return max;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let max = 0;
  let right = height.length - 1;
  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};