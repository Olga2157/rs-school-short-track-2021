/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const strN = String(n);
  for (let i = 0; i < strN.length; i++) {
    // создаем число на 1 цифру меньше с текущем индексом
    const curNum = Number(strN.slice(0, i) + strN.slice(i + 1));
    //  сравниваем все такие числа друг с другом
    max = Math.max(max, curNum);
  }
  return max;
}

module.exports = deleteDigit;
