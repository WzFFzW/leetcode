/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // let max = 0;
  // for (let right = 1; right < height.length; right++) {
  //   for (let left = 0; left < right; left++) {
  //     const area = (right - left) * Math.min(height[left], height[right]);
  //     max = Math.max(max, area);
  //   }
  // }
  // return max;
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, area);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max
};

console.log(maxArea([2,3,4,5,18,17,6]));