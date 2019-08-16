/**
 * 
 * 
简单记忆步骤
从最尾端开始往前寻找两个相邻的元素，两者满足i < ii（令第一个元素为i，第二个元素为ii）
如果没有找到这样的一对元素则，表明当前的排列是最大的，没有下一个大的排列
如果找到，再从末尾开始找出第一个大于i的元素，记为j                                  
交换元素i, j，再将ii后面的所有元素颠倒排列(包括ii)
如果某个排列没有比他大的下一个排列（即该排列是递减有序的），调用这个函数还是会把原排列翻转，即得到最小的排列
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const len = nums.length;
  let i = len - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = len - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i + 1);
};

function swap(nums, a, b) {
  const tmp = nums[a];
  nums[a] = nums[b];
  nums[b] = tmp;
}

function reverse(nums, i) {
  let j = nums.length - 1;
  while (j > i) {
    swap(nums, j, i);
    j--;
    i++;
  }
}