var groupAnagrams = function (strs) {
  let map = {};
  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");
    if (map[sortedWord]) {
      map[sortedWord].push(word);
    } else {
      map[sortedWord] = [word];
    }
  }
  return Object.values(map);
};
