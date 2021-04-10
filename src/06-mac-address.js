/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 *
 */
function isMAC48Address(n) {
  const regExp = new RegExp('([0-9A-F]{2}-){5}([0-9A-F]){2}');
  return regExp.test(n);
  // alternative solution:
  // const regExp = new RegExp('[0-9A-F]{2}');
  // const numArr = n.split('-');
  // if (numArr.length !== 6) {
  //   return false;
  // }
  // for (let i = 0; i < numArr.length; i++) {
  //   if (!regExp.test(numArr[i])) {
  //     return false;
  //   }
  // }
  // return true;
}
// ([0-9A-F]{2}-){5}([0-9A-F]){2}

module.exports = isMAC48Address;
