const calculator = (function () {
  let _calculation = {
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined,
  };

  const enter = (information) => {
    if (
      _calculation.firstNumber === undefined &&
      _calculation.operator === undefined &&
      _calculation.secondNumber === undefined
    ) {
      return (_calculation.firstNumber = information);
    } else if (
      _calculation.firstNumber !== undefined &&
      _calculation.operator === undefined &&
      _calculation.secondNumber === undefined
    ) {
      return (_calculation.operator = information);
    } else if (
      _calculation.firstNumber !== undefined &&
      _calculation.operator !== undefined &&
      _calculation.secondNumber === undefined
    ) {
      return (_calculation.secondNumber = information);
    } else {
      return "call equal or reset";
    }
  };

  const reset = () => {
    return (_calculation = {
      firstNumber: undefined,
      operator: undefined,
      secondNumber: undefined,
    });
  };

  const equal = () => {
    if (
      _calculation.firstNumber === undefined ||
      _calculation.operator === undefined ||
      _calculation.secondNumber === undefined
    ) {
      return "reset and enter again the information";
    }

    if (_calculation.operator === "+") {
      return _calculation.firstNumber + _calculation.secondNumber;
    } else if (_calculation.operator === "-") {
      return _calculation.firstNumber - _calculation.secondNumber;
    } else if (_calculation.operator === "*") {
      return _calculation.firstNumber * _calculation.secondNumber;
    } else if (_calculation.operator === "/") {
      return _calculation.firstNumber / _calculation.secondNumber;
    } else if (_calculation.operator === "%") {
      return _calculation.firstNumber % _calculation.secondNumber;
    } else {
      return "you have put invalid operator, reset and enter again information";
    }
  };

  return {
    enter,
    reset,
    equal,
  };
})();

calculator.enter(3);
calculator.enter(3);
calculator.enter(5);
console.log(calculator.enter(3));
console.log(calculator._calculation);
console.log(calculator.equal());
console.log(calculator.reset());
