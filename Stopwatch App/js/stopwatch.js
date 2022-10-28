let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let timerDisplay = document.getElementById("input");
const imgGif = document.getElementById("gif");
let interval = null;
let [milliseconds, seconds, minute, hour] = [0, 0, 0, 0];

startBtn.addEventListener('click', startFunc);
stopBtn.addEventListener('click', stopFunc);
resetBtn.addEventListener('click', resetFunc);

// update timer function
function updateTimer(){
    milliseconds += 10;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds += 1;
        if(seconds === 60){
            seconds = 0;
            minute += 1;
            if(minute === 60){
                minute = 0;
                hour += 1;
            }
        }
    }
    if (hour>9) {
        hour = hour;
    } else {
        hour = "0" + hour;
    }
    if (minute>9) {
        minute = minute;
    } else {
        minute =  "0" + minute;
    }
    if (seconds>9) {
        seconds = seconds;
    } else {
        seconds = "0"+ seconds;
    }
    if(milliseconds < 10){
        milliseconds = "0" + milliseconds;
    } else{
        milliseconds =  milliseconds;
    }
    timerDisplay.innerText = `${hour} : ${minute} : ${seconds} : ${milliseconds}`;
    hour = Number(hour);
    minute = Number(minute);
    seconds = Number(seconds);
    milliseconds = Number(milliseconds);
} 

// start function on click event on start button
function startFunc(){
    if(interval !== null){
        clearInterval(interval);
    }
    interval = setInterval(updateTimer, 100);
    imgGif.classList.remove("gifimage");
    const mediaQuery = window.matchMedia('(max-width:483px)')
    if (mediaQuery.matches) {
       imgGif.style.marginTop = "0px";
    }
    else{
        imgGif.style.marginTop = "-50px";
        imgGif.style.zIndex = "-999";
    }
}

// stop function on click event on stop button
function stopFunc(){
    clearInterval(interval);
    imgGif.classList.add("gifimage");
}

// reset function on click event on reset button
function resetFunc(){
    timerDisplay.innerHTML = "00 : 00 : 00 : 00";
    [milliseconds, seconds, minute, hour]=[0,0,0,0];
    clearInterval(interval);
    stopFunc();
}