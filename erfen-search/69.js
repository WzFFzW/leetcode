/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  function _mySqrt(left, right) {
    const mid = parseInt((right + left) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      return _mySqrt(left, mid);
    } else {
      if ((mid + 1) * (mid + 1) > x) {
        return mid;
      }
      if ((mid + 1) * (mid + 1) === x) {
        return mid + 1;
      }
      return _mySqrt(mid + 1, right);
    }
  }
  return _mySqrt(0, x);
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) {
    return 0;
  }
  let left = 0;
  let right = x;
  while (left < right) {
    const mid = parseInt((left + right) / 2);
    const midSqrt = mid * mid;
    if (midSqrt === x) {
      return mid;
    } else if (midSqrt > x) {
      right = mid;
    } else {
      const midAddOneSqrt = (mid + 1) * (mid + 1)
      if (midAddOneSqrt === x) {
        return mid + 1;
      }
      if (midAddOneSqrt > x) {
        return mid;
      }
      left = mid + 1;
    }
  }
};