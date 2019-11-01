/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let index = 0;
  let res = '';
  function _getPermutation(str) {
    if (str.length === n) {
      index += 1;
      if (index === k) {
        res = str;
      }
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (str.includes(i)) {
        continue;
      }
      _getPermutation(str + i);
      if (index === k) {
        return;
      }
    }
  }
  _getPermutation('');
  return res;
};

var getPermutation = function(n, k) {
  function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  let _factorial = factorial(n - 1);
  let index = 0;
  let res = '';

  if (_factorial > k) {
    const beginIndex = parseInt(k / _factorial) + 1;
    k = k - _factorial * (beginIndex - 1);
    _getPermutation(beginIndex + '');
  } else {
    _getPermutation('');
  }

  function _getPermutation(str) {
    if (str.length === n) {
      index += 1;
      if (index === k) {
        res = str;
      }
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (str.includes(i)) {
        continue;
      }
      _getPermutation(str + i);
      if (index === k) {
        return;
      }
    }
  }
  return res;
};

console.log(getPermutation(4, 9));