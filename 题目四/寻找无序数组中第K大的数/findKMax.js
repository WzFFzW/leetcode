/**
 * 
 * @param {number[]} arr
 * @param {number} k
 * @returns {number} 
 */
function findKMax(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  let pivot = arr[0];
  while (left < right) {
    while (arr[right] < pivot && left < right) {
      right--;
    }
    if (left < right) {
      arr[left++] = arr[right];
    }
    while (arr[left] > pivot && left < right) {
      left++;
    }
    if (left < right) {
      arr[right--] = arr[left]
    }
  }
  arr[left] = pivot;
  if (left === k - 1) {
    return arr[left];
  } else if (left > k - 1) {
    return findKMax(arr.slice(0, left), k)
  } else {
    return findKMax(arr.slice(left + 1), k - left - 1);
  }
}