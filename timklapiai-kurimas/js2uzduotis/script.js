function calculate(num1, num2, operation) {
  try {
    if (operation === "+") {
      const result = num1 + num2;
      return result;
    } else if (operation === "-") {
      const result = num2 - num1;
      return result;
    } else if (operation === "*") {
      const result = num1 * num2;
      return result;
    } else if (operation === "/") {
      if (num2 === 0) {
        throw new Error("Cannot divide by zero");
      }
      result = num1 / num2;
    } else {
      throw new Error("Invalid operation");
    }
  } catch (error) {
    console.error(error);
  }
}
console.log(calculate(10, 2, "+"));
console.log(calculate(10, 2, "/"));
console.log(calculate(10, 0, "/"));
