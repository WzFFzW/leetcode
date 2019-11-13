/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  if (n === 0) {
    return 0;
  }
  const map = {1: 1, 2: 2};
  for (let i = 3; i <= n; i++) {
    let allTrees = 0;
    for (let j = 1; j <= i; j++) {
      const leftTrees = map[j - 1] || 1;
      const rightTrees = map[i - j] || 1;
      allTrees = allTrees + leftTrees * rightTrees;
    }
    map[i] = allTrees;
  }
  return map[n];
};