/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // 暴力解法
  // let res = 0;
  // let offset = Math.pow(2, 52);
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     for (let k = j + 1; k < nums.length; k++) {
  //       const sum = nums[i] + nums[j] + nums[k];
  //       const tmpOffset = Math.abs(sum - target);
  //       if (tmpOffset === 0) {
  //         return sum;
  //       }
  //       if (tmpOffset < offset) {
  //         offset = tmpOffset;
  //         res = sum;
  //       }
  //     }
  //   }
  // }
  // return res; 
  // 改造三数之和的解法
  let ans = 0;
  let offset = Math.pow(2, 52);
  nums.sort((a, b) => a - b); // 排序
  const len = nums.length;
  if(nums == null || len < 3) return ans;
  for (let i = 0; i < len ; i++) {
    let L = i+1;
    let R = len-1;
    while(L < R){
      const sum = nums[i] + nums[L] + nums[R];
      const tmpOffset = sum - target;
      if (tmpOffset === 0) {
        return sum;
      } else if (Math.abs(tmpOffset) < offset) {
        ans = sum;
        offset = Math.abs(tmpOffset);
      }
      if (tmpOffset < 0) {
        L++
      }
      if (tmpOffset > 0) {
        R--;
      }
    }
  }        
  return ans;
};