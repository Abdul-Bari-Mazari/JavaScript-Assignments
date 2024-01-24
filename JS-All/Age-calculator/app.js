var dateInput = document.getElementById("date-input");
var years = document.getElementById("years");
var months = document.getElementById("months");
var days = document.getElementById("days");
var errorMessage = document.getElementById("errorMessage");
dateInput.max = new Date().toISOString().split("T")[0];

function calculateDOB() {
  var currentDate = new Date().getTime();
  var birthDate = new Date(dateInput.value).getTime();
  var diff = currentDate - birthDate;

  // To find years: Difference / Days in a year
  var calculatedYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // years

  // To find Months: Difference % ((Days in a years) / (Days in a month))
  var calculatedMonths = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * (365.25 / 12))
  ); // Months

  // To find days: Difference % ((Days in a month) / (Total days))
  var calculatedDays = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24)
  ); // Days

  years.innerHTML = calculatedYears;
  months.innerHTML = calculatedMonths;
  days.innerHTML = calculatedDays;

  if (dateInput.value === "") {
    years.innerHTML = "0";
    months.innerHTML = "0";
    days.innerHTML = "0";
    errorMessage.innerHTML = "Please choose a date first!";
  } else {
    errorMessage.innerHTML = "";
  }
}
