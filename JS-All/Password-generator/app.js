// Generation IDs
var rangeInput = document.getElementById("input");
var sliderNumber = document.getElementById("range-text");
var output = document.getElementById("output");
var generateButton = document.getElementById("generate-button");

var error = document.getElementById("error");

// Checkbox IDs
var smallCheckbox = document.getElementById("small-letter-checkbox");
var capitalCheckbox = document.getElementById("capital-letter-checkbox");
var numberCheckbox = document.getElementById("number-checkbox");
var specialCheckbox = document.getElementById("special-char-checkbox");

// Characters
var smallLetters = "abcdefghijklmnopqrstuvwxyz";
var capitalLetters = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
var numbers = "123456789012345678901234567890";
var specialCharacter = "!@#$%^&*()_+;:<>?/!@#^$&#*#()*&^%%$#";

// Generate Password function

function generatePass() {
  var newPassword = "";
  var selectedChars = "";

  if(smallCheckbox.checked) {
    selectedChars += smallLetters;
  }

  if(capitalCheckbox.checked) {
    selectedChars += capitalLetters;
  }

  if(numberCheckbox.checked) {
    selectedChars += numbers;
  }

  if(specialCheckbox.checked) {
    selectedChars += specialCharacter;
  }


  console.log(selectedChars, smallLetters.length);

  for(let i = 0; i < rangeInput.value; i++) {
    var randomNumbers = Math.floor(Math.random() * selectedChars.length);
    console.log(selectedChars[randomNumbers])
    newPassword += selectedChars[randomNumbers];

  output.value = newPassword;
  error.innerHTML = "";

  if(smallCheckbox.checked == false && capitalCheckbox.checked == false && numberCheckbox.checked == false && specialCheckbox.checked == false) {
    error.innerHTML = "(Select any one to include)";
    error.style.color = "red";
    error.style.fontWeight = "light";
    output.value = "";
    }

  }

}

function rangeTextToValue() {
  sliderNumber.innerHTML = rangeInput.value;
}




// **** Tried different logic ****

// if(smallCheckbox.checked == true) { // Small letters
//   newPassword += smallLetters[randomNumbers];
// }

// else if(smallCheckbox.checked == true && capitalCheckbox.checked == true) { // Small and capital letters
//   newPassword += (smallLetters[randomNumbers] + capitalLetters[randomNumbers]);
// }

// else if(smallCheckbox.checked == true && numberCheckbox.checked == true) { // Small letters and numbers
//   newPassword += (smallLetters[randomNumbers] + numbers[randomNumbers]);
// }

// else if(capitalCheckbox.checked == true && numberCheckbox.checked == true) { // Capital letters and numbers
//   newPassword += (capitalLetters[randomNumbers] + numbers[randomNumbers]);
// }

// else if(capitalCheckbox.checked == true && numberCheckbox.checked == true && smallCheckbox == true) { // Capital, small letters and numbers
//   newPassword += (capitalLetters[randomNumbers] + numbers[randomNumbers] + smallLetters[randomNumbers]);
// }

// else if(capitalCheckbox.checked == true && numberCheckbox.checked == true && smallCheckbox == true && specialCheckbox == true) { // Capital, small letters, numbers and special chars
//   newPassword += (capitalLetters[randomNumbers] + numbers[randomNumbers] + smallLetters[randomNumbers] + specialCharacter[randomNumbers]);
// }
