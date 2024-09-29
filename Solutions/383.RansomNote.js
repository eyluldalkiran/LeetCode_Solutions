var canConstruct = function (ransomNote, magazine) {
  let magazineMap = {};

  for (let char of magazine) {
    if (magazineMap[char]) {
      magazineMap[char]++;
    } else {
      magazineMap[char] = 1;
    }
  }
  for (let char of ransomNote) {
    if (!magazineMap[char] || magazineMap[char] === 0) {
      return false;
    } else {
      magazineMap[char]--;
    }
  }
  return true;
};
