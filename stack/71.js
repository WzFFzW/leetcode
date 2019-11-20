/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const pathArr = path.split('/');
  const stack = [];
  for (let i = 0; i < pathArr.length; i++) {
    const dir = pathArr[i];
    if (dir === '..') {
      stack.pop();
    } else if (dir === '.') {
    } else if (!dir) {      
    } else {
      stack.push(dir);
    }
  }
  return `/${stack.join('/')}`;
};