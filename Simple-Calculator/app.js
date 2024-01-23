var input = document.getElementById("input-field");
var answer = document.getElementById("answer-field");

function insertChar(inputChar) {
  input.value += inputChar;
}

function clearInput() {
  input.value = "";
}

function clearAll() {
  input.value = "";
  answer.value = "";
}

function delChar() {
  input.value = input.value.toString().slice(0, -1);
}

function square() {
  input.value = input.value + "*" + input.value;
}

function upon() {
  input.value = 1 + "/" + input.value;
}

function squareRoot() {
  input.value = Math.sqrt(input.value);
}

function calulation() {
  try {
    answer.value = eval(input.value);
  } catch (error) {
    answer.value = "Error";
  }
  input.value = "";
}
