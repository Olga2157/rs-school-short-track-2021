/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
const ListNode = require('../extensions/list-node');

function removeKFromList(l, k) {
  // вводим доп временный элемент с позицией перед первым элементом
  // на случай, если первый элемент совпадет с тем, который надо исключить
  const fakeHead = new ListNode(-1);
  // для него следующий - это первый элемент - l
  fakeHead.next = l;
  //
  let curEl = l;
  let prevEl = fakeHead;
  // пока не последний элемент
  while (curEl !== null) {
    // если элемент совпадает с тем, что надо исключить - разрываем связь,
    // с предыдущего перекидываем на через него;
    if (curEl.value === k) {
      prevEl.next = curEl.next;
    } else {
      prevEl = curEl;
    }
    // переходим на шаг вперед к следующему значению
    curEl = curEl.next;
  }
  return fakeHead.next;
}

module.exports = removeKFromList;
