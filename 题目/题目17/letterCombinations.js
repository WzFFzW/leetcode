/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return [];
  }
  const MAP = {
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  function cartesianProduct(a, b) {
    if (!a || !b) {
      throw new Error('a b不能为空');
    }
    const res = []
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        res.push(a[i] + b[i] + '');
      }
    }
    return res;
  }
  const digit_arr = digits.split('').map((item) => MAP[item]);
  
  if (digit_arr.length === 1) {
    return digit_arr;
  }
  let res = cartesianProduct(digit_arr[0], digit_arr[1]);
  for (let i = 2; i < digit_arr.length; i++) {
    res = cartesianProduct(res, digit_arr[i]);
  }
  return res;
};