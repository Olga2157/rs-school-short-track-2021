/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();
  const arr1 = [];
  const arr2 = [];
  // create 2 arrays with 26 letters from a till z and count of each letter
  for (let i = 0; i < 26; i++) {
    arr1[i] = 0;
    arr2[i] = 0;
  }
  for (let i = 0; i < lowerS1.length; i++) {
    arr1[lowerS1.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < lowerS2.length; i++) {
    arr2[lowerS2.charCodeAt(i) - 97]++;
  }
  // compare two arrays and choose min from count of each letter
  for (let i = 0; i < arr1.length; i++) {
    sum += Math.min(arr1[i], arr2[i]);
  }
  return sum;
}

// .toLowerCase
// [26]
// 112 - 97
// str.charCodeAt(i) - 97
// a = 97
// b = 98
// z = 112

module.exports = getCommonCharacterCount;
