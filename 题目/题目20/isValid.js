/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  let i = 0;
  const MAP = new Map().set('}', '{').set(')', '(').set(']', '[');
  while (i < s.length) {
    const str = s[i++];
   if (str === '}' || str === ')' || str === ']') {
     if (!stack.length) {
       return false;
     } else {
       if (stack.pop() === MAP.get(str)) {
         continue;
       }
       return false;
     }
   }
   stack.push(str);
  }
  if (!stack.length) {
    return true;
  }
  return false;
};