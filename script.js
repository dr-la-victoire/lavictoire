/* This function displays the UTC Day and Time in the document*/

function displayUTC() {
  const now = new Date(); // creating a Date object

  // Getting the hours and minutes
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes}`;

  // An array to store the days of the week
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = weekDay[now.getUTCDay()];

  // Maniputlating the DOM to add the UTC Time and Day
  document.getElementById("time").textContent = `${time}`;
  document.getElementById("day").textContent = `${today}`;
}

// Setting it to refresh every second
setInterval(displayUTC, 1000);

// Calling the function
displayUTC();
