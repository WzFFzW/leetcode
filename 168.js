/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let res = '';
  const map = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
  while (n) {
    const index = n % 26;
    res = map[index] + res;
    n = index === 0 ? Math.floor(n / 26) - 1 : Math.floor(n / 26);
  }
  return res;
};