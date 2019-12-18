/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const version1Arr= version1.split('.');
  const version2Arr = version2.split('.');
  let i = 0;
  if (version1Arr.length > version2Arr.length) {
    const start = version2Arr.length;
    version2Arr.length = version1Arr.length;
    version2Arr.fill(0, start);
  } else if (version1Arr.length < version2Arr.length) {
    const start = version1Arr.length;
    version1Arr.length = version2Arr.length;
    version1Arr.fill(0, start);
  }
  while (i < version1Arr.length) {
    let _version1 = +version1Arr[i];
    let _version2 = +version2Arr[i];
    if (_version1 > _version2) {
      return 1;
    } else if (_version1 < _version2) {
      return -1;
    } else if (_version2 === _version1) {
      if (i === version1Arr.length - 1) {
        return 0;
      }
      i++;
    }
  }
};