/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const res = {};
  candidates.sort();
  for (let i = 0; i <= target; i++) {
    if (!res[i]) {
      res[i] = [];
    }
    for (let j = 0; j < candidates.length;j++) {
      const bei_jian_shu = i;
      const jian_shu = candidates[j];
      const tmp_arr = res[bei_jian_shu];
      if (jian_shu === bei_jian_shu) {
        tmp_arr.push([jian_shu]);
      } else {
        const difference = bei_jian_shu - jian_shu;
        if (res[difference]) {
          res[difference].map((item) => {
            const index = item.indexOf(jian_shu);
            if (index > -1) {
              let flag = 1;
              while (item[index + flag] === jian_shu) {
                flag++;
              }
              if (candidates[j + flag] !== jian_shu) {
                return;
              }
            }
            const arr = [jian_shu, ...item];
            arr.sort();
            const str = arr.toString();
            const is_repeat = res[bei_jian_shu].some((item) => str === item.toString());
            if (!is_repeat) {
              res[bei_jian_shu].push(arr);
            }
          });
        }
      }
      while (jian_shu === candidates[j + 1]) {
        j++;
      }
    }
  }
  return res[target];
};