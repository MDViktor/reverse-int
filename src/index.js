module.exports = function reverse (n) {
  const x = String(Math.abs(n))
  let i = 0;
  result = '';
  while (i < x.length) {
    result = `${x[i]}${result}`;
    i = i + 1;
  }
  return Number(result);
}
