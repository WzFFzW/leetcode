/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = {};
  candidates.sort();
  for (let i = 0; i <= target; i++) {
    for (let j = 0; j < candidates.length;j++) {
      const bei_jian_shu = i;
      const jian_shu = candidates[j];
      if (!res[bei_jian_shu]) {
        res[bei_jian_shu] = [];
      }
      const tmp_arr = res[bei_jian_shu];
      if (jian_shu === bei_jian_shu) {
        tmp_arr.push([jian_shu]);
      } else {
        const difference = bei_jian_shu - jian_shu;
        if (res[difference]) {
          res[difference].map((item) => {
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
    }
  }
  return res[target];
};