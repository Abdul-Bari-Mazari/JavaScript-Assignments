var currentDate = new Date().getTime();
var birthDate = new Date("16 Nov 2002").getTime();

var diff = currentDate - birthDate;

console.log(diff);
console.log(Math.floor(diff / (1000 * 60 * 60 * 24 * 365))); // years
console.log(Math.floor(diff / (1000 * 60 * 60 * 24 * 365 * 12))); // Months
console.log(Math.floor(diff / (1000 * 60 * 60) % 24) );