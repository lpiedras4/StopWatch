let date = new Date();
document.getElementById("date-text").innerHTML="<h1>Today's date is " + date + "</h1>"
let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
startButton.addEventListener("click",start);
resetButton.addEventListener("click",reset);
function start(){
    startButton.textContent = "Pause";

}
function reset(){
    startButton.textContent = "Start";
}