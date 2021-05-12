/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArr = [];
  let positiveArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      positiveArray.push(arr[i]);
    }
  }
  positiveArray = positiveArray.sort((num1, num2) => num1 - num2);
  
  // Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
//   positiveArray = positiveArray.sort(compare);
// function compare(num1, num2) {
// //num1-num2 аналогично логике:
//   if (num1 < num2) {
//     return -1;
//   }
//   if (num1 > num2) {
//     return 1;
//   }
//   // num1 = num2
//   return 0;
// }
// -1: num1 num2, 1: num2 num1, 0: оставит числа в своей же последовательности в отсортированном массиве
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      sortArr.push(arr[i]);
    } else {
      sortArr.push(positiveArray.shift());
//       shift берет первый элемент и удаляет его
    }
  }
  return sortArr;
}

module.exports = sortByHeight;
