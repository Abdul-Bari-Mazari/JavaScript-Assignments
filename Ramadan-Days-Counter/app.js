setInterval(function () {
  var daysInRamadan = new Date("11 March 2024");
  var date = new Date();

  var diff = daysInRamadan - date;

  var days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "d ";
  var hours =
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "h ";
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) + "m ";
  var seconds = Math.floor((diff % (1000 * 60)) / 1000) + "s ";

  document.getElementById("daysLeft").innerHTML = days;
  document.getElementById("timeLeft").innerHTML = hours + minutes + seconds;
});

// console.log(diff / (1000 * 60 * 60 * 24));
