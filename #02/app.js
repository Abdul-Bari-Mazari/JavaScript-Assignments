// ************************ Chapter # 05 *************************

// Q1


// let num1 = +prompt("Enter num 1:");
// let num2 = +prompt("Enter num 2");
//  num3 = num1 + num2;

// document.write("Sum of" + " " + num1 + " and " + num2 + " is " + num3 + "<br>");

// Q2

// num3 = num1 - num2;

// document.write("Subtraction of" + " " + num1 + " and " + num2 + " is " + num3 + "<br>");

// num3 = num1 * num2;

// document.write("Multiplication of" + " " + num1 + " and " + num2 + " is " + num3 + "<br>");

// num3 = num1 / num2;

// document.write("Division" + " " + num1 + " and " + num2 + " is " + num3 + "<br>");

// Q3

//  var myVar;

//  document.write("Value after variable declaration is " + myVar + "<br>");

//  myVar = 5;

//  document.write("Initial value: " + myVar + "<br>");

//  myVar++;

//  document.write("Value after increment is " + myVar + "<br>");

//  myVar += 7;

//  document.write("Value after addition : " + myVar + "<br>");

//  myVar--;

//  document.write("Value after decrement is: " + myVar + "<br>");


//  var remainder = myVar % 3;

//  document.write("The remainder is: " + remainder);


// Q4

// var tickets = 600;
// var fiveTickets = 600 * 5;

// document.write("Total cost to buy 5 tickets to a movies is " + fiveTickets + "PKR");

// Q5

// document.write("Table of 4 <br>");

// for(i=0; i <= 10; i++) {
//     result = 4 * i;
//     document.write("4 x" + i + "=" + result + "<br>");  
// }

// Q6

// var celsiusTemp = 25;
// var FahrenheitFormula = (celsiusTemp * 9/5) + 32;
// var FahrenheitTemp = 50;
// var celsiusFormula = (FahrenheitTemp - 32) * 5/9;

// document.write(celsiusTemp + "°C" + " is " + FahrenheitFormula + "°F <br>");

// document.write(FahrenheitTemp + "°F" + " is " + celsiusFormula + "°C");


// Q7

// var ItemOne$ = 650;
// var ItemOneQuant = 3;
// var ItemTwo$ = 100;
// var ItemTwoQuant = 7;
// var shipCharges = 100;
// var total = ItemOne$ * ItemOneQuant + ItemTwo$ * ItemTwoQuant + shipCharges;

// document.write("Price of item 1 is " + ItemOne$ + "<br>");

// document.write("Quantity of item 1 is " + ItemOneQuant + "<br>");

// document.write("Price of item 2 is " + ItemTwo$ + "<br>");

// document.write("Quantity of item 2 is " + ItemTwoQuant + "<br>");

// document.write("Shipping Charges " + shipCharges + "<br>");

// document.write("<br>" + "Total cost of your order is " + total);


// Q8

// var totalMarks = 980; var obtainedMarks = 804;
// var percentage = (obtainedMarks/totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>");

// document.write("Marks Obtained: " + obtainedMarks + "<br>");

// document.write("Percentage: " + percentage + "%");


// Q9

// var dollars = 10; saudiRiyal = 25;
// var currInPKR = dollars * 104.80 + saudiRiyal * 28;

// document.write("Total Currency in PKR: " + currInPKR);


// Q10

// var number = 10+5*10/2;
// document.write(number);


// Q11

// var currentYear = 2023; birthYear = 2002;
// var age = currentYear - birthYear;

// document.write("Current Year: " + currentYear + "<br>");

// document.write("Birth Year: " + birthYear + "<br>" + "Your age: " + age);


// Q12

// var radius = 20; circumference = 2 * 3.142 * radius; area = 3.142 * radius * radius;

// document.write("Radius of a circle is: " + radius + "<br>"); 
// document.write("The circumference is: " + circumference + "<br>"); 
// document.write("The area is: " + area);


// Q13

// var favSnack = 'Cake Rusk'; age = 21; maxAge = 60; estAmmount = 3; eatTotal = (maxAge-age) * estAmmount;

// document.write("<h1>The Lifetime Supply Calculator</h1><br>");
// document.write("Favourite Snak:" + favSnack + "<br>"); 
// document.write("Current age:" + age + "<br>"); 
// document.write("Estimated Max age:" + maxAge + "<br>");
// document.write("Amout of snacks per day:" + estAmmount + "<br>");
// document.write("You will need " + eatTotal + " " + favSnack + "to last you until the ripe old age of " + maxAge);



// ************************ Chapter # 6 - 9 *************************


// Q1

// let a = +prompt("Enter value of a:");

// document.write("Result: <br>");
// document.write("The value of a is " + a + "<br>");
// document.write("---------------------------------<br><br>");

// ++a;

// document.write("The value of ++a is " + a + "<br>");
// document.write("Now the value of a is:" + a + "<br> <br>");

// document.write("The value of a++ is " + a + "<br>");

// a++;

// document.write("Now the value of a is:" + a + "<br> <br>");

// --a;

// document.write("The value of --a is " + a + "<br>");

// document.write("Now the value of a is:" + a + "<br> <br>");

// document.write("The value of a++ is " + a + "<br>");

// a--;

// document.write("Now the value of a is:" + a + "<br> <br>");



// Q2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is:" + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>");


// Q3

// let name = prompt("Enter your name please!");

// alert("Welcome " + name);



// Q5

// let num = +prompt("Enter a number to see it's table:", "5");

// for (i = 1; i <= 10; i++) {
//   result = num * i;
//   document.write(num + "x" + i + "=" + result + "<br>");
// }


// Q6

// let sub1 = prompt("Enter subject 1:");
// let sub2 = prompt("Enter subject 2:");
// let sub3 = prompt("Enter subject 3:");

// var SubTotalMarks = 100;

// let sub1Marks = +prompt("Enter math marks:");
// let sub2Marks = +prompt("Enter english marks:");
// let sub3Marks = +prompt("Enter urdu marks:");

// var overallMarks = sub1Marks + sub2Marks + sub3Marks;

// var percentage = overallMarks/(3*SubTotalMarks) * 100;

// document.write("<table>");

// document.write("<tr> <th>Subject</th>  <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>");

// document.write("<tr><td>" + sub1 + "</td>" + "<td>" + SubTotalMarks + "<td>" + sub1Marks + "</td></tr>");

// document.write("<tr><td>" + sub2 + "</td>" + "<td>" + SubTotalMarks + "<td>" + sub2Marks + "</td></tr>");

// document.write("<tr><td>" + sub3 + "</td>" + "<td>" + SubTotalMarks + "<td>" + sub3Marks + "</td></tr>");

// document.write("<tr><td></td>" + "<td>" + SubTotalMarks + "</td>" + "<td>" + overallMarks + "</td>" + "<td>" + percentage + "%" + "</td></tr>");

// document.write("</table>");


