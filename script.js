const display = document.querySelector(".display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");

let currentOperand = "";
let previousOperand = "";
let currentOperator = null;

function appendNumber(number) {
  currentOperand += number;
  display.value = currentOperand;
}

function chooseOperator(operator) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  currentOperator = operator;
  previousOperand = currentOperand;
  currentOperand = "";
}

function compute() {
  let result;
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(previous) || isNaN(current)) return;
  switch (currentOperator) {
    case "+":
      result = previous + current;
     
