/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  // let flag = 0;
  // let len = 0;
  // let j = 0;
  // let res = 0;
  // while (j < s.length) {
  //   let i = j;
  //   while (i < s.length) {
  //     const str = s[i];
  //     if (str === '(') {
  //       i++;
  //       flag++;
  //       continue;
  //     } else {
  //       if (flag < 1) {
  //         flag = 0;
  //         len = 0;
  //         i++;
  //         continue;
  //       } else {
  //         flag--;
  //         len++;
  //         i++;
  //         if (flag === 0) {
  //           res = res > (len * 2) ? res : len * 2;
  //         }
  //       }
  //     }
  //   }
  //   j++;
  //   flag = 0;
  //   len = 0;
  // }
  // return res;

  // 动态规划法
  const len = s.length;
  if (len === 0) {
    return 0;
  }
  const dp = [];
  let i = 0;
  let res = 0;
  while (i < len) {
    const str = s[i];
    if (str === '(') {
      dp[i] = 0;
    } else {
      if (s[i - 1] === '(') {
        dp[i] = (dp[i - 2] || 0) + 2;
      } else if (s[i - 1] === ')' && i - dp[i - 1] - 1 >=0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + 2 + (dp[i - dp[i - 1] - 2] || 0);
      } else {
        dp[i] = 0;
      }
    }
    if (dp[i] > res) {
      res = dp[i];
    }
    i++;
  }
  return res;
};