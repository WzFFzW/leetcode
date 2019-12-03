/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const res = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const hash = str.split('').reduce((pre, cur) => pre + cur.charCodeAt(), '');
    res[hash] ? res[hash].push(str) : res[hash] = [str];
  }
  return Object.values(res);
};