let date = new Date();
document.getElementById("date-text").innerHTML="<h1>Today's date is " + date + "</h1>"
let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
const start = document.getElementById("start-btn");
const reset = document.getElementById("reset-btn");
