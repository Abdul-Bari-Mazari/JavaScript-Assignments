// Q1
// const st_name = [];

// Q2
// const st_name1 =  new st_name1();

// Q3
// const string_array = ["Abdul Bari"];

// Q4
// const number_array = [1,2,3];

// Q5
// const boolean_array =  [true, false];

// Q6
// const mix_array = [1,2,3, "string", true];


// Q7
// let qualifications = ["SSC", "HSC", "BSC", "BS", "BSCOM", "MS", "M. Phil.", "PhD"];

// document.write("Qualifications <br> <br>");
// document.write("1)" + qualifications[0] + "<br>");
// document.write("2)" + qualifications[1] + "<br>");
// document.write("3)" + qualifications[2] + "<br>");
// document.write("4)" + qualifications[3] + "<br>");
// document.write("5)" + qualifications[4] + "<br>");
// document.write("6)" + qualifications[5] + "<br>");
// document.write("7)" + qualifications[6] + "<br>");
// document.write("8)" + qualifications[7] + "<br>");


// Q8
// let st_names = ["Abdul Bari", "Abdul Haseeb", "Aqib Ilyas"];
// let score = [320, 230, 480];
// let total_marks = 500;

// document.write("Score of Abdul Bari is " + score[0] + ". " + "Percentage: " + score[0]/total_marks * 100 + "% <br>");

// document.write("Score of Abdul Haseeb is " + score[1] + ". " + "Percentage: " + score[1]/total_marks * 100 + "% <br>");

// document.write("Score of Aqib Ilyas is " + score[2] + ". " + "Percentage: " + score[2]/total_marks * 100 + "% <br>");


// Q9
// let colors = ["red","blue","green","gray","purple","orange", "yellow", "pink"];

// document.write("<b>Colors:</b> <br> " + colors + "<br> <br>");

// // a
// let add_start = prompt("Enter the color you want to add to the beginning:");
// colors.unshift(add_start);

// document.write("<b>Updated Array: (Addition to start) </b> <br>" + colors + "</b> <br>");

// // b
// let add_end = prompt("Enter the color you want to add to the end:");
// colors.push(add_end);

// document.write("<br> <b>Updated Array (Addition to end):</b> <br>" + colors);

// // c
// let add1 = prompt("Enter color to add to start (1)");
// let add2 = prompt("Enter color to add to start (2)");
// colors.unshift(add1, add2);

// document.write("<br> <br> <b>Updated Array (Addition of two colors to start):</b> <br>" + colors);

// // d
// colors.shift();

// document.write("<br> <br> <b>Updated Array (Deletion from start):</b> <br>" + colors);

// // e
// colors.pop();

// document.write("<br> <br> <b>Updated Array (Deletion from end):</b> <br>" + colors);

// // f
// let index = prompt("Enter the index at which you want to add:");
// let color_at_index = prompt("Enter the color to add at that index:");

// colors.splice(index, 0 , color_at_index);

// document.write("<br> <br> <b>Updated Array (Addition to the given index):</b> <br>" + colors);

// // g
// let remove_index = prompt("Enter the index at which you wanna delete:")
// let remove_quant = prompt("Enter how many colors you wanna delete:")

// colors.splice(remove_index, remove_quant);

// document.write("<br> <br> <b>Updated Array (Deletion from index to given quantity):</b> <br>" + colors);


// Q10
// let st_scores = [320, 230, 480 ,120];

// document.write("Scores of Students: " + st_scores + "<br>");

// st_scores.sort();

// document.write("Ordered Scores of Students: " + st_scores);


// Q11
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// let selected_cities = cities.slice(2,4);

// document.write("<b>Cities:</b> " + cities + "<br> <br>");
// document.write("<b>Selected Cities:</b> " + selected_cities);


// Q 12
// let arr = ["This", "is", "my", "cat"];

// document.write("<b>Array: </b>" + arr + "<br> <br>");

// let text = arr.join(" ");

// document.write("<b>String: </b>" + text);


// Q 13
// let devices = [];
// devices.push("Keboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");

// document.write("<b> Devices </b> <br>" + devices);

// document.write("<br> <br> Out: " + devices.shift());
// document.write("<br> Out: " + devices.shift());
// document.write("<br> Out: " + devices.shift());
// document.write("<br> Out: " + devices.shift());


// Q 14
// let devices = [];
// devices.push("Keboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");

// document.write("<b> Devices </b> <br>" + devices);

// document.write("<br> <br> Out: " + devices.pop());
// document.write("<br> Out: " + devices.pop());
// document.write("<br> Out: " + devices.pop());
// document.write("<br> Out: " + devices.pop());

