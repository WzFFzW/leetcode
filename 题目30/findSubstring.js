/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const res = [];
  const word_map = new Map();
  words.map((item) => {
    const value = word_map.get(item);
    value ? word_map.set(item, value + 1) : word_map.set(item, 1);
  })
  const substr_length = words[0].length * words.length;
  const word_length = words[0].length;
  if (substr_length > s.length) {
    return res;
  }
  let i = 0;
  while (i < s.length - substr_length) {
    const str = s.slice(i, word_length);
    const value = word_map.get(str);
    if (!value) {
      i++;
      continue;
    }
    const tmp_map = new Map();
    tmp_map.set(str, 1);
    let j = i + word_length;
    while (j < substr_length) {
      const tmp_str = s.slice(j, j + word_length);
      const value = word_map.get(tmp_str);
      if (!value) {
        break;
      }
      if (tmp_map.get(tmp_str) > word_map.get(tmp_str)) {
        break;
      }
      tmp_map.set(tmp_str, tmp_map.get(tmp_str) + 1);
      j += word_length;
    }
    if (j - i === substr_length) {
      res.push(i);
    }
    i++;
  }
  return res;
};