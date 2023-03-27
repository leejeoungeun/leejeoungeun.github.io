let input = '0';

function addNumber(num) {
  if (input === '0') {
    input = num;
  } else {
    input += num;
  }
  updateDisplay(input);
}

function addOperator(operator) {
  input += operator;
  updateDisplay(input);
}

function clearInput() {
  input = '0';
  updateDisplay(input);
}

function calculate() {
  let result = eval(input);
  input = result.toString();
  updateDisplay(input);
}

function updateDisplay(input) {
  document.getElementById('result').value = input;
}
