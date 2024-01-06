var string = prompt("Enter a word to check for palindrome:");
var reverseString = "";

for (let i = string.length - 1; i >= 0; i--) {
  reverseString += string[i];
}

if (string === reverseString) {
  alert("Its a palindrome.");
} else {
  alert("Not a palindrome!");
}
