/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (s.length > 12) {
    return [];
  }
  const res = [];
  for (let a = 1; a < 4; a++) {
    for (let b = 1; b < 4; b++) {
      for (let c = 1; c < 4; c++) {
        for (let d = 1; d < 4; d++) {
          if (a + b + c + d == s.length) {
            const n1 = s.substring(0, a);
            const n2 = s.substring(a, a + b);
            const n3 = s.substring(a + b, a + b + c);
            const n4 = s.substring(a + b + c);
            if (n1 <= 255 && n2 <= 255 && n3 <= 255 && n4 <= 255) {
              const ip = `${+n1}.${+n2}.${+n3}.${+n4}`;
              if (ip.length === s.length + 3) {
                res.push(ip);
              }
            }
          }
        }
      }
    }
  }
  return res;
}; 