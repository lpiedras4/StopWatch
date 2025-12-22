let startTime; // exact timestamp when the user clicks "start"
let elapsedTime = 0; // total time passed (for pause and resume funcitons)
let timerInterval; //stores function to display every few miliseconds
let isRunning = false; // bool to indicate when stopwatch is running
let min = 0;
let sec = 0;
let centisec = 0;
const minBox = document.getElementById("min-box");
const secBox = document.getElementById("sec-box");
const centiSecondsBox = document.getElementById("centiseconds-box");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
startButton.addEventListener("click",toggleTimer);
resetButton.addEventListener("click",reset);

function toggleTimer(){
    if(!isRunning){
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    startButton.textContent = "Pause";
    timerInterval = setInterval(function updateTime() {
    elapsedTime= Date.now() - startTime;
    updateDisplay(elapsedTime);
    },10)
    }else{
        isRunning = false;
        startButton.textContent="Resume";
        clearInterval(timerInterval);
    }
   
}

function updateDisplay(ms){
    //calculate time units
    min = Math.floor(ms / 60000);
    sec = Math.floor ((ms % 60000) / 1000);
    centisec = Math.floor ((ms % 1000) / 10);
    //format with leading ceros
    const fMins = min.toString().padStart(2, "0");
    const fSecs = sec.toString().padStart(2, "0");
    const fCentis = centisec.toString().padStart(2, "0");
    minBox.childNodes[0].textContent = fMins + " ";
    secBox.childNodes[0].textContent = fSecs + " ";
    centiSecondsBox.childNodes[0].textContent = fCentis + " ";
}
function reset(){
    isRunning = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    startButton.textContent = "Start";
    updateDisplay(0);
}
function pause(){
    startButton.textContent = "Resume";
    startButton.addEventListener("click",resume);
}
let date = new Date();
document.getElementById("date-text").innerHTML="<h1>Today's date is " + date + "</h1>"