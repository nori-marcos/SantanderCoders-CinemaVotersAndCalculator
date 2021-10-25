class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  enter(number) {
    if (this.firstNumber === undefined && this.secondNumber === undefined) {
      this.firstNumber = number;
    } else if (
      this.firstNumber !== undefined &&
      this.secondNumber === undefined
    ) {
      this.secondNumber = number;
    } else {
      console.log("Reset the calculator");
    }
  }

  reset() {
    this.firstNumber = undefined;
    this.secondNumber = undefined;
  }
}

class SumCalculator extends Calculator {
  constructor(firstNumber, secondNumber) {
    super(firstNumber, secondNumber);
  }

  reset() {
    super.reset;
  }

  enter(number) {
    super.enter(number);
  }

  get equal() {
    let result = this.firstNumber + this.secondNumber;
    return result;
  }
}

class SubtractionCalculator extends Calculator {
  constructor(firstNumber, secondNumber) {
    super(firstNumber, secondNumber);
  }

  reset() {
    super.reset;
  }

  enter(number) {
    super.enter(number);
  }

  get equal() {
    let result = this.firstNumber - this.secondNumber;
    return result;
  }
}

class MultiplicationCalculator extends Calculator {
  constructor(firstNumber, secondNumber) {
    super(firstNumber, secondNumber);
  }

  reset() {
    super.reset;
  }

  enter(number) {
    super.enter(number);
  }

  get equal() {
    let result = this.firstNumber * this.secondNumber;
    return result;
  }
}
class DivisionCalculator extends Calculator {
  constructor(firstNumber, secondNumber) {
    super(firstNumber, secondNumber);
  }

  reset() {
    super.reset;
  }

  enter(number) {
    super.enter(number);
  }

  get equal() {
    let result = this.firstNumber / this.secondNumber;
    return result;
  }
}

const sum = new SumCalculator();
sum.enter(2);
sum.enter(3);
console.log(sum.equal);








class Calculadora {
  constructor() {
    this.calculatorArray = [];
    this.calculatorMemoryArray = [];
  }

  enter(x) {
    this.calculatorArray = [...this.calculatorArray, x];
  }

  list() {
    return this.calculatorMemoryArray;
  }

  reset() {
    this.calculatorMemoryArray = [];
  }
}
class CalculadoraSoma extends Calculadora {
  equals() {
    const soma = this.calculatorArray.reduce(
      (somaAtual, current) => somaAtual + current,
      0
    );

    const memory = `${this.calculatorArray.join(" + ")} = ${soma}`;

    this.calculatorMemoryArray = [...this.calculatorMemoryArray, memory];
    this.calculatorArray = [];

    return soma;
  }
}