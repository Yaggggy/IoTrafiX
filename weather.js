"use strict";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let formattedDate = `${month} ${day}, ${year}`;

document.querySelector(".date").textContent = formattedDate;

const API_KEY = "da757a097dc96e738f46a3fc614d86dc";
const CITY = "Meerut";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".description").textContent =
      data.weather[0].description;
    document.querySelector(
      ".weather-icon"
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.querySelector(".temp").textContent = `${Math.round(
      data.main.temp
    )}°C`;
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
    document.querySelector(".city").textContent = "N/A";
    document.querySelector(".description").textContent = "Check API Key";
  });
