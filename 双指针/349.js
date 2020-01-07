/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let indexOne = 0;
  let indexTwo = 0;
  const res = [];
  while (indexOne < nums1.length && indexTwo < nums2.length) {
    while (indexOne <= nums1.length - 2 && nums1[indexOne] === nums1[indexOne + 1]) {
      indexOne++;
    }
    while (indexTwo <= nums2.length - 2 && nums2[indexTwo] === nums2[indexTwo + 1]) {
      indexTwo++;
    }
    if (nums1[indexOne] === nums2[indexTwo]) {
      res.push(nums1[indexOne]);
      indexTwo++;
      indexOne++;
    } else if (nums1[indexOne] > nums2[indexTwo]) {
      indexTwo++;
    } else {
      indexOne++;
    }
  }
  return res;
};