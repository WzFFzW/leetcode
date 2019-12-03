/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const MAP = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let res = 0;
  for (let i = 1; i < s.length + 1; i++) {
    const oneRoman = s.substr(i - 1, 1);
    const twoRoman = s.substr(i - 1, 2);
    let value = MAP[oneRoman];
    if (MAP[twoRoman]) {
      i++;
      value = MAP[twoRoman];
    }
    res = res + value;
  }
  return res;
};
