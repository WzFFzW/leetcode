/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // if (nums.length === 1) {
  //   return nums[0] >= target ? 0 : 1;
  // }
  // let i = nums.length >> 1;
  // while (i < nums.length && i > 0) {
  //   const val = nums[i];
  //   if (val === target || (val > target && target > nums[i - 1]) || (val < target && target < nums[i + 1])) {
  //     if ((val < target && target < nums[i + 1])) {
  //       i++;
  //     }
  //     return i;
  //   }
  //   if (val > target) {
  //     i--;
  //   } else if (val < target) {
  //     i++;
  //   }
  // }
  // return i;

  // 二分法
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const val = nums[mid];
    if (val === target) {
      return mid;
    } else if (val < target) {
      left = mid + 1;
    } else if (val > target) {
      right = mid - 1;
    }
  }
  return left;
};