/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let tmpArr = [...nums1];
  let k = 0;
  while (i < m && j < n) {
    nums1[k++] = tmpArr[i] > nums2[j] ? nums2[j++] : tmpArr[i++];
  }
  if (j >= n) {
    for (; i < m; i++) {
      nums1[k++] = tmpArr[i];
    }
  } else {
    for (; j < n; j++) {
      nums1[k++] = nums2[j];
    }
  }
  return nums1;
};