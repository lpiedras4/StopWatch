let date = new Date();
document.getElementById("date-text").innerHTML="<h1>Today's date is " + date + "</h1>"
let startTime; // exact timestamp when the user clicks "start"
let elapsedTime = 0; // total time passed (for pause and resume funcitons)
let timerInterval; //stores function to display every few miliseconds
let isRunning = false;
let min = 0;
let sec = 0;
let centisec = 0;
const minBox = document.getElementById("min-box");
const secBox = document.getElementById("sec-box");
const centiSecondsBox = document.getElementById("centiseconds-box");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
startButton.addEventListener("click",start);
resetButton.addEventListener("click",reset);

function start(){
    
    startTime = Date.now();
    timerInterval = setInterval(function updateTime() {
    const currTime = Date.now();
    const timePassed = currTime - startTime + elapsedTime
    updateDisplay(timePassed);
    },10)
    startButton.textContent = "Pause";
    if(this.textContent === "Pause"){
        startButton.addEventListener("click",pause);
    }
}

function updateDisplay(ms){
    //calculate time units
    minutes = Math.floor(ms / 60000);
    seconds = Math.floor ((ms % 60000) / 1000);
    centiseconds = Math.floor ((ms % 1000) / 10);
    //format with leading ceros
    const fMins = minutes.toString().padStart(2, "0");
    const fSecs = seconds.toString().padStart(2, "0");
    const fCentis = centiseconds.toString().padStart(2, "0");
    minBox.childNodes[0].textContent = fMins + " ";
    secBox.childNodes[0].textContent = fSecs + " ";
    centiSecondsBox.childNodes[0].textContent = fCentis + " ";
}
function reset(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    startButton.textContent = "Start";
    updateDisplay(elapsedTime);
}
function pause(){
    startButton.textContent = "Resume";
    startButton.addEventListener("click",resume);
}
function resume(){
    
}