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
    if(this.textContent === "Pause"){
        startButton.addEventListener("click",pause);
    }
}
function reset(){
    startButton.textContent = "Start";
}
function pause(){
    startButton.textContent = "Resume";
    startButton.addEventListener("click",resume);
}
function resume(){
    
}