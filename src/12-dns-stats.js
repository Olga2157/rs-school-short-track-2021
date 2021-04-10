/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  // object - key: сабдомен; value: newCounter
  for (let i = 0; i < domains.length; i++) {
    // создаем массив сабдоменов
    const subDomains = domains[i].split('.').reverse();
    let prevSubDomain = '.';
    for (let j = 0; j < subDomains.length; j++) {
      // если сабдомен есть в объекте
      if (res[prevSubDomain + subDomains[j]]) {
        // увеличиваем счетчик на 1
        const newCounter = res[prevSubDomain + subDomains[j]] + 1;
        // помещаем новое значение счетчика в объект по value (newCounter)
        res[prevSubDomain + subDomains[j]] = newCounter;
      } else {
        // если нет в объекте - добавляем с value 1
        res[prevSubDomain + subDomains[j]] = 1;
      }
      prevSubDomain += `${subDomains[j]}.`;
    }
  }
  return res;
}

module.exports = getDNSStats;
