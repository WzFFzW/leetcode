/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!words.length || !s.length) {
    return [];
  }
  const substr_length = words[0].length * words.length;
  if (substr_length > s.length) {
    return [];
  }
  const res = [];
  const word_map = new Map();
  words.map((item) => {
    const value = word_map.get(item);
    value ? word_map.set(item, value + 1) : word_map.set(item, 1);
  })
  const word_length = words[0].length;
  if (substr_length > s.length) {
    return res;
  }
  let i = 0;
  while (i <= s.length - substr_length) {
    const str = s.slice(i, i + word_length);
    const value = word_map.get(str);
    if (!value) {
      i++;
      continue;
    }
    const tmp_map = new Map();
    tmp_map.set(str, 1);
    let j = word_length;
    while (j <= substr_length) {
      const tmp_str = s.slice(i + j, i + j + word_length);
      const value = word_map.get(tmp_str);
      if (!value) {
        break;
      }
      const tmp_value = tmp_map.get(tmp_str);
      if (tmp_value && tmp_value + 1 > word_map.get(tmp_str)) {
        break;
      }
      if (!tmp_value) {
        tmp_map.set(tmp_str, 1)
      } else {
        tmp_map.set(tmp_str, tmp_value + 1);
      }
      j += word_length;
    }
    if (j === substr_length) {
      res.push(i);
    }
    i++;
  }
  return res;
};