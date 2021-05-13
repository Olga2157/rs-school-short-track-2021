/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    if (!this.arr) {
      this.arr = [];
    }
//     массив - это переменная класса Stack, в конец массива записываем текущий элемент
    this.arr.push(element);
  }

  pop() {
//     извлекаем и удаляем последний элемент из массива
    return this.arr.pop();
  }

  peek() {
//     отображаем последний элемент массива
    return this.arr[this.arr.length - 1];
  }
}

module.exports = Stack;
