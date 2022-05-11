var actualMins = 24;
var actualSec = 60;
var func;

let Timer = () => {
  actualSec = actualSec - 1;
  if (actualSec == 0) {
    actualMins = actualMins - 1;
    actualSec = 60;
  }

  if (actualMins == 0) {
    document.getElementById("Warning").innerHTML =
      "Its time to start timer again :)";
  }

  document.getElementById("display").innerHTML = actualMins + " : " + actualSec;
};

function timer() {
  func = setInterval(Timer, 1000);
}

function stopTimer() {
  document.getElementById("Warning").innerHTML = "Timer stopped ";
  clearInterval(func);
}
