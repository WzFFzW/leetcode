/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  if (word1 === word2) {
    return 0;
  }
  if (word1 === '' || word2 === '') {
    return word2.length || word1.length;
  }
  let dist = [];
  for (let i = 0; i < word1.length; i++) {
    dist[i] = new Array(word2.length);
  }
  function dp(i, j) {
    if (i === -1) {
      return j + 1;
    }
    if (j === -1) {
      return i + 1;
    }
    if (dist[i][j]) {
      return dist[i][j];
    }
    if (word1[i] === word2[j]) {
      return dist[i][j] = dp(i - 1, j - 1);
    }
    const insert_step = dp(i, j - 1) + 1;
    const delete_step = dp(i - 1, j) + 1;
    const replace_step = dp(i - 1, j - 1) + 1;
    return dist[i][j] = Math.min(delete_step, insert_step, replace_step);
  }
  const a = dp(word1.length - 1, word2.length - 1);
  return a;
};