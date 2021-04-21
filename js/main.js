const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const swButton = Array.from(document.querySelectorAll('.button'));
const input = document.querySelector('#input')
const secondHand = document.querySelector('#secondHand');
const minsHand = document.querySelector('#minHand');
const hourHand = document.querySelector('#hourHand');
const display = document.querySelector('#display');

const stopwatch = {

  startTime: 0,
  elapsedTime: 0,
  timeInterval: 0,
  isRunning: false,

  timeToString: function(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    mm = mm.toString().padStart(2, "0");
    ss = ss.toString().padStart(2, "0");
    ms = ms.toString().padStart(2, "0");

    return `${mm}:${ss}:${ms}`;
  },

  print: function(text) {
    display.innerHTML = text;
  },

  timeInterval: setInterval(function printTime() {
    let elapsedTime = Date.now() - stopwatch.startTime;
  }, 1000),

  start: function() {
    event.target.classList.add('clicking');
    if (stopwatch.isRunning) {

    } else {
      stopwatch.startTime = Date.now() - stopwatch.elapsedTime;
      stopwatch.timerInterval = setInterval(function printTime() {
        stopwatch.elapsedTime = Date.now() - stopwatch.startTime;
        stopwatch.print(stopwatch.timeToString(stopwatch.elapsedTime));
      }, 10);
      stopwatch.isRunning = true;
    }
  },

  stop: function() {
    event.target.classList.add('clicking');
    clearInterval(stopwatch.timerInterval);
    stopwatch.isRunning = false;
  },

  reset: function() {
    event.target.classList.add('clicking');
    clearInterval(stopwatch.timerInterval);
    stopwatch.print('00:00:00');
    stopwatch.elapsedTime = 0;
    stowatch.isRunning = false;
  },

  stopTransition: function(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicking');
  },
};

startButton.addEventListener('click', stopwatch.start)
stopButton.addEventListener('click', stopwatch.stop)
resetButton.addEventListener('click', stopwatch.reset)
swButton.forEach(button => button.addEventListener('transitionend', stopwatch.stopTransition));
