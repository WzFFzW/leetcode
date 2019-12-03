/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s.length === 0) {
    if (p.length === 0 || p === '*') {
      return true;
    }
    return false;
  }
  if (p[0] === '?') {
    return isMatch(s.slice(1), p.slice(1));
  } else if (p[0] === '*') {
    return isMatch(s.slice(1), p.slice(1)) || isMatch(s, p.slice(1)) || isMatch(s.slice(1), p);
  } else if (p[0] === s[0]) {
    return isMatch(s.slice(1), p.slice(1));
  } else if (p[0] !== s[0]) {
    return false;
  }
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (/^\*+$/.test(p)) {
    return true;
  }
  if (s.length === 0) {
    if (p.length === 0 || /^\*+$/.test(p)) {
      return true;
    }
    return false;
  }
  let s_index = 0;
  let p_index = 0;
  let index = -1;
  let match = 0;
  while (s_index < s.length) {
    if (s[s_index] === p[p_index] || p[p_index] === '?') {
      s_index++;
      p_index++;
    } else if (p[p_index] === '*' && p_index < p.length) {
      index = p_index;
      match = s_index;
      p_index++;
    } else if (index !== -1) {
      p_index = index + 1;
      match += 1;
      s_index = match;
    } else {
      return false
    }
  }
  return p_index === p.length || /^\*+$/.test(p.slice(p_index));
};