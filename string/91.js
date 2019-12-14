/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const map = [];
  map[s.length - 1] = s[s.length - 1] === '0' ? 0 : 1;
  map[s.length] = 1;
  for (let i = s.length - 2; i >= 0; i--) {
    const val = s[i];
    if (val === '0') {
      map[i] = 0;
      continue;
    }
    if (val + s[i + 1] <= 26) {
      map[i] = map[i + 1] + (map[i + 2] !== undefined ? map[i + 2] : 1);
    } else {
      map[i] = map[i + 1];
    }
  }
  return map[0];
};
