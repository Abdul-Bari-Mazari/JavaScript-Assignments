// Q1;
// var firstName = prompt("Ente first name:", "Abdul");
// var lastName = prompt("Enter last name:", "Bari");
// var fullName = firstName + " " + lastName;

// document.write(fullName);

//Q2
// var favPhoneModel = prompt(
//     "Enter your favorite mobile phone model:",
//     "Galaxy S6 Edgme Plus"
// );

// document.write("My favorite phone is: " + favPhoneModel + "<br/>");
// document.write("Length of string:" + favPhoneModel.length);

//Q3
// var string = "Pakistani";
// document.write("String: " + string + "<br/>");
// document.write(string.indexOf("n"));

//Q4
// var string = "Hello World";
// document.write("String: " + string + "<br/>");
// document.write("Last index of: " + string.lastIndexOf("l"));

//Q5
// var string = "Pakistani";
// document.write("String: " + string + "<br/>");
// document.write("Character at index 3: " + string[3]);

// Q6;
// var firstName = prompt("Ente first name:", "Abdul");
// var lastName = prompt("Enter last name:", "Bari");
// var fullName = firstName + " " + lastName;

//Q7
// var word = "Hyderabad";
// var toReplace = "Hyder";
// var replace = "Islam";

// for (i = 0; i <= word.length; i++) {
//   if (word.slice(i, 5 + i) === toReplace) {
//     word = replace + word.slice(i + word.length);
//   }
// }

//Q7 (Method 2)
// var word = "Hyderabad";
// var toReplace = "Hyder";
// var replace = "Islam";

// document.write(word.replace(toReplace, replace));
// console.log(word);

//Q8
// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";

// document.write(message.replaceAll("and", "&"));

//Q9
// var value = "472";

// document.write("Value: " + value + "<br/>");
// document.write("Type: " + typeof value + "<br/>");
// document.write("Value: " + value + "<br/>");
// document.write("Type: " + typeof Number(value));

//Q10
// var userInput = ("Enter word to tranform to upper case", "abdullah");
// document.write("Upper case: " + userInput.toUpperCase());

//Q12
// var num = 35.36;
// document.write("Number: " + num + "<br/>");
// document.write("Result: " + num.toString().replace(".", ""));

//Q14
// var array = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchInput = prompt("Enter an element to search:", "cake").toLowerCase();
// flag = false;

// for (i = 0; i < array.length; i++) {
//   if (array[i] === searchInput) {
//     flag = true;
//     alert(array[i] + " is available at " + array.indexOf(array[i]));
//   }
// }

// if (!flag) {
//   alert("We are sorry. " + searchInput + " is not available in our bakery.");
// }

//Q15
// var password = prompt("Enter password:");

// if (isNaN(parseInt(password[0])) && password.length == 6) {
//   alert("Password is valid!");
// } else {
//   alert(
//     "Password must contain 6 characters and should not start with a number!"
//   );
// }

//Q16
// var university = "University of Karachi";

// document.write(university.split("").join("<br/>"));

//Q17
// var input = prompt("Enter any word: ");

// alert("The last character is: " + input.charAt(input.length - 1));

//Q18
// var string = "“The quick brown fox jumps over the lazy dog".toLowerCase();
// var word = "the";

// var count = string.split(word).length - 1;

// document.write("The word 'the' appeared in the string " + count + " times.");
