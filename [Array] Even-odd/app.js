var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrEven = [""];
var arrOdd = [""];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arrEven.push(arr[i]);
  }
}
document.write("Even Array: " + arrEven);

for (let i = 0; i << arr.length; i++) {
  if (arr[i] % 2 === 1) {
    arrOdd.push(arr[i]);
  }
}
document.write("<br/> Odd Array: " + arrOdd);
