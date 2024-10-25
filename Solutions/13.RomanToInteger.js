const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romans[s[i]] < romans[s[i + 1]]) {
      result -= romans[s[i]];
    } else {
      result += romans[s[i]];
    }
  }
  return result;
};
