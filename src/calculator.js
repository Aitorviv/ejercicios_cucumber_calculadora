class Calculator {
  #result = 0;

  add(a, b) {
    this.#result = a + b;
  }
  subtract(a, b) {
    this.#result = a - b;
  }
  multiply(a, b) {
    this.#result = a * b;
  }
  divide(a, b) {
    if (b === 0) throw new Error('División por cero');
    this.#result = a / b;
  }
  getResult() {
    return this.#result;
  }
}

module.exports = Calculator;
