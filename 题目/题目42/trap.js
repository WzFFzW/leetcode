var calWater = function(height) {
  let left = 0, v = 0, cv = 0;
  for(let i=1; i < height.length; ++i) {
      if (height[i] >= height[left]) {
          v += (i - left - 1) * height[left] - cv;
          left = i;
          cv = 0;
      } else {
          cv += height[i];
      }
  }
  return v;
}

/**
* @param {number[]} height
* @return {number}
*/
var trap = function(height) {
  let top = -Infinity, index = -1;
  for(let i=0; i < height.length; ++i) {
      if (height[i] > top) {
          top = height[i];
          index = i;
      }
  }
  return calWater(height.slice(0, index + 1)) + 
          calWater(height.slice(index, height.length).reverse());
};