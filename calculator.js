const calculator = (function () {
  let _arrayOfEntries = [];
  let doneOperations = [];

  const addition = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
  };
  const subtraction = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
  };
  const multiplication = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
  };
  const remainder = (firstNumber, secondNumber) => {
    return firstNumber % secondNumber;
  };

  const operators = {
    "+": addition,
    "-": subtraction,
    "*": multiplication,
    "%": remainder,
  };

  const enter = (information) => {
    return _arrayOfEntries.push(information);
  };

  const equal = () => {
    let [firstNumber, operator, secondNumber] = _arrayOfEntries;

    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
      return "Reset and enter valid entries as follows: number, operator and number";
    }

    if (operator in operators) {
      let result = operators[operator](firstNumber, secondNumber);
      doneOperations.push([
        `${firstNumber} ${operator} ${secondNumber} = ${result}`,
      ]);
      return result;
    }

    return "Reset and enter valid entries as follows: number, operator and number";
  };

  const reset = () => {
    return _arrayOfEntries.splice(0, _arrayOfEntries.length);
  };

  const getTheDoneOperations = () => {
    return doneOperations;
  };

  return {
    enter,
    reset,
    equal,
    getTheDoneOperations,
  };
})();
