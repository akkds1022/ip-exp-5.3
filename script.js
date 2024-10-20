const list = document.getElementById('list');
const btn = document.getElementById('btn');

class SquareIterator {
    constructor(numbers) {
      this.numbers = numbers;
      this.index = 0;
    }
  
    // Implementing the iterator protocol
    next() {
      if (this.index < this.numbers.length) {
        const value = this.numbers[this.index] ** 2;
        this.index++;
        return { value, done: false };
      } else {
        return { done: true };
      }
    }
  
    [Symbol.iterator]() {
      return this;
    }
  }
  
  const number = document.getElementById('numbers');
  
  const numbers = [1, 2, 3, 4, 5];
  number.append(numbers);
  const squareIterator = new SquareIterator(numbers);
  

  btn.addEventListener('click', () => {
    const { value, done } = squareIterator.next();
    if (done) {
        alert('done');
        return;
    }
    const li = document.createElement('li');
    li.textContent = value;
    list.appendChild(li);
});
  
  