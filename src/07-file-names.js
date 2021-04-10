/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesMap = new Map();
  const res = [];
  for (let i = 0; i < names.length; i++) {
    if (namesMap.has(names[i])) {
      // вытаскиваем количество раз, сколько встретилось выражение - те значение по ключу
      const curCount = namesMap.get(names[i]);
      // увеличили в map счетчик, сколько встретилось выражение
      namesMap.set(names[i], curCount + 1);
      // добавляем в map новое получившееся выражение и количество раз - 1
      namesMap.set(`${names[i]}(${curCount})`, 1);
      // добавляем в итоговый массив выражение
      res.push(`${names[i]}(${curCount})`);
    } else {
      // добавляем в итоговый массив выражение
      res.push(names[i]);
      // добавляем в map выражение и количество раз - 1
      namesMap.set(names[i], 1);
    }
  }
  return res;
}

module.exports = renameFiles;
