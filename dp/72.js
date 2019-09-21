/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // let dist = [];
  function dp(i, j) {
    if (i <= 0 && j <= 0) {
      return 1;
    }
    if (word1[i] === word2[j]) {
      return dp(i - 1, j - 1);
    }
    const insert_step = dp(i, j - 1) + 1;
    const delete_step = dp(i - 1, j) + 1;
    const replace_step = dp(i - 1, j - 1) + 1;
    return Math.min(dp(insert_step, delete_step, replace_step));
  }
  return dp(word1.length - 1, word2.length - 1);
};