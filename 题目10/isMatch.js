/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p === '') {
    return s === '';
  }
  const isFirstLetterMatch = s !== '' && (s[0] === p[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.slice(2)) || (isFirstLetterMatch && isMatch(s.slice(1), p));
  } else {
    return isFirstLetterMatch && isMatch(s.slice(1), p.slice(1));
  }
};

// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  */
// var isMatch = function(s, p) {
//   if (p === '') {
//     return s === '';
//   }
//   const isFirstLetterMatch = s !== '' && (s[0] === p[0] || p[0] === '.');
//   if (isFirstLetterMatch) {
//     if (p.length >= 2 && p[1] === '*') {
//       return isMatch(s.slice(1), p) || isMatch(s, p.slice(2));
//     } else {
//       return isMatch(s.slice(1), p.slice(1));
//     }
//   } else {
//     if (p.length >= 2 && p[1] === '*') {
//       return isMatch(s, p.slice(2));
//     } else {
//       return false;
//     }
//   }
// };