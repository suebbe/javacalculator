

let firstNumber = parseInt(prompt("Please enter a number"),10);
let operator = prompt("Choose between +, -, / or *");
let secondNumber = parseInt(prompt("Please enter another number"),10);


let resultAdd = add(firstNumber,secondNumber);
let resultSubtract = subtract(firstNumber,secondNumber);
let resultMultiply = multiply(firstNumber,secondNumber);
let resultDivide = divide(firstNumber,secondNumber);

let total = 0;

if (operator == "+") {
  total = add(firstNumber, secondNumber);
} else if (operator == "-") {
  total = subtract(firstNumber, secondNumber);
} else if (operator == "/") {
  total = divide(firstNumber, secondNumber);
} else if (operator == "*"){
  total = multiply(firstNumber, secondNumber);
} else {
  alert("Please enter a valid operator")
}


function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;

}


function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}


function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}


function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

console.log(total);
