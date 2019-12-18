/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let i = 0;
  let word = '';
  const res = [];
  while (i < s.length) {
    const _s = s[i++];
    if (_s === ' ') {
      if (word !== '') {
        res.push(word);
      }
      word = '';
      continue;
    }
    word += _s;
  }
  if (word !== '') {
    res.push(word);
  }
  return res.reverse().join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ').split(' ').reverse().join(' ');
};