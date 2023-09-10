// JavaScript code to get the current day of the week and UTC time
document.addEventListener("DOMContentLoaded", function () {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayElement = document.querySelector(
    "[data-testid='currentDayOfTheWeek']"
  );
  const currentUTCTimeElement = document.querySelector(
    "[data-testid='currentUTCTime']"
  );

  // Get the current date and time in UTC
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  const currentUTCTime = currentDate.getTime(); // Time in milliseconds

  // Update the HTML elements with the current day and UTC time
  currentDayElement.textContent = currentDay;
  currentUTCTimeElement.textContent = currentUTCTime;
});
