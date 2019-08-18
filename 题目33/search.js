/**
 * 
 * nums[0] <= target <=nums[middle]
 * target < nums[middle] < nums[0]
 * nums[middle] < nums[0] <= target
 * 在二分法左右两个指针进行位置的时候，出现上述情况的时候，说要应该是右指针前移
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right && left < nums.length) {
    let middle = (left + right) >> 1;
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] > target) {
      if (target >= nums[0] || nums[middle] < nums[0]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target >= nums[0] && nums[0] > nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }


    // if ((nums[0] > target) ^ (nums[0] > nums[middle]) ^ (target > nums[middle])) {
    //   left = middle + 1;
    // } else {
    //   right = middle;
    // }
  }
  return left == right && nums[left] == target ? left : -1;
};