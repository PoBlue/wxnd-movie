const getLineNums = (blockHeight) => {
  const linesHeight = 1.5 * 16;
  return Math.floor(blockHeight / linesHeight);
}

module.exports = { getLineNums }
