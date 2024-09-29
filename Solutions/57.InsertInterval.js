var insert = function (intervals, newInterval) {
  let result = [];

  let mergedInterval = newInterval;

  for (let i = 0; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    if (currentInterval[1] < mergedInterval[0]) {
      result.push(currentInterval);
    } else if (currentInterval[0] > mergedInterval[1]) {
      result.push(mergedInterval);
      mergedInterval = currentInterval;
    } else {
      mergedInterval[0] = Math.min(mergedInterval[0], currentInterval[0]);
      mergedInterval[1] = Math.max(mergedInterval[1], currentInterval[1]);
    }
  }
  result.push(mergedInterval);
  return result;
};
