var buttonValue = document.getElementById("one");
var input = document.getElementById("input-field");

function getNumber() {
  input.innerHTML = buttonValue.value;
}

buttonValue.addEventListener('click', getNumber)