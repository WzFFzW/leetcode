/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	if (num1 === '0' || num2 === '0') {
		return '0';
	}
  const res_arr = [];
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (!res_arr[i + j]) {
        res_arr[i + j] = 0;
      }
      res_arr[i + j] += num1[i] * num2[j];
    }
	}
	res_arr.reverse();
  const over_head = res_arr.reduce((pre, cur, cur_index) => {
		cur += pre;
		res_arr[cur_index] = cur % 10;
    return Math.floor(cur / 10);
	}, 0);
	const res = res_arr.reverse().join('');
  return over_head ? (over_head + '' + res) : res;
};
