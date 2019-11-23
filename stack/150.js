/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  const operatorMap = {
    '+': (left, right) => left + right,
    '-': (left, right) => left - right,
    '*': (left, right) => left * right,
    '/': (left, right) => left / right,
  };
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (operatorMap[token]) {
      const rightNum = +stack.pop();
      const leftNum = +stack.pop();
      const newToken = operatorMap[token](leftNum, rightNum);
      stack.push(parseInt(newToken));
    } else {
      stack.push(token);
    }
  }
  return stack[0];
};