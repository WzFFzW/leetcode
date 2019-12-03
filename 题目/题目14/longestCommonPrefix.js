/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = [];
  let length = nums.length
  nums.sort((a, b) => a - b); // 排序
  if(nums == null || length < 3) return ans;
  for (let i = 0; i < length ; i++) {
    if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
    let left = i + 1;
    let right = length - 1;
    while(left < right){
      const sum = nums[i] + nums[left] + nums[right];
      if(sum == 0){
          ans.push([nums[i],nums[left],nums[right]]);
          while (left<right && nums[left] == nums[left+1]) left++; // 去重
          while (left<right && nums[right] == nums[right-1]) right--; // 去重
          left++;
          right--;
      }
      else if (sum < 0) left++;
      else if (sum > 0) right--;
    }
  }        
  return ans;
};