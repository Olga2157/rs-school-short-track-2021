// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');

class Queue {
  get size() {
    return this.count;
  }

  enqueue(element) {
    if (!this.tail) {
      //  для первого вызова - перед последним элементом создаем псевдо - tail
      this.tail = new ListNode(-1);
      this.count = 0;
    }
    // tempNextTail -  временное значение next для псевдо - tail
    const tempNextTail = this.tail.next;
    // создаем новый элемент
    const newEl = new ListNode(element);
    // для псевдо tail создаем next на новый элемент
    this.tail.next = newEl;
    // след от нового - это временное значение next для псевдо - tail (которое было ранее)
    newEl.next = tempNextTail;
    this.count++;
  }

  dequeue() {
    let cur = this.tail;
    // добегаем до второго элемента
    for (let i = 0; i < this.count - 1; i++) {
      cur = cur.next;
    }
    // след от второго - как раз первый = res
    const res = cur.next;
    // обнулили ссылку: второй элемент ссылает вникуда - стал как бы первым
    cur.next = null;
    this.count--;
    return res.value;
  }
}

module.exports = Queue;
