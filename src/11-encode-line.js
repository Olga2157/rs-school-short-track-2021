/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let res = '';
  // случай пустой строки или строки из 1 элемента
  if (str.length <= 1) {
    return str;
  }
  // если строка более 1 элемента:
  for (let i = 1; i < str.length; i++) {
    // значения совпали
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      // если переход с одного значения на другое и предыдущая была только один раз
      if (count === 1) {
        res += str[i - 1];
      } else {
        // если предыдущая была несколько раз подряд
        res += String(count) + str[i - 1];
      }
      count = 1;
    }
  }
  // для последнего значения: сколько раз встречалась последняя буква
  // если один раз
  if (count === 1) {
    res += str[str.length - 1];
  } else {
    // если посл буква была несколько раз подряд
    res += String(count) + str[str.length - 1];
  }
  return res;
}

module.exports = encodeLine;

// str.length - 1 = индекс последнего элемента
// str[str.length - 1] - последняя буква
