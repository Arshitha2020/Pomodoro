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
  document.getElementById("Warning").innerHTML = " ";
  clearInterval(func2);
  clearInterval(func3);
  func = setInterval(Timer, 1000);
}

//STOP Logic for all time intervals

function stopTimer() {
  document.getElementById("Warning").innerHTML = "Timer stopped ";
  clearInterval(func);
  clearInterval(func2);
  clearInterval(func3);
}

//Tiny Break Logic

var tMins = 04;
var tSec = 60;
let tBreak = () => {
  tSec = tSec - 1;
  if (tSec == 0) {
    tMins = tMins - 1;
    tSec = 60;
  }

  if (tMins == 0) {
    document.getElementById("Warning").innerHTML =
      "Its time to start timer again :)";
  }

  document.getElementById("display").innerHTML = tMins + " : " + tSec;
};

var func2;

function tBtimer() {
  document.getElementById("Warning").innerHTML = " ";
  clearInterval(func);
  clearInterval(func3);
  func2 = setInterval(tBreak, 1000);
}

//Long Break Logic

var lMins = 14;
var lSec = 60;

let lBreak = () => {
  lSec = lSec - 1;
  if (lSec == 0) {
    lMins = lMins - 1;
    lSec = 60;
  }

  if (lMins == 0) {
    document.getElementById("Warning").innerHTML =
      "Its time to start timer again :)";
  }

  document.getElementById("display").innerHTML = lMins + " : " + lSec;
};

var func3;

function lBtimer() {
  document.getElementById("Warning").innerHTML = " ";
  clearInterval(func);
  clearInterval(func2);
  func3 = setInterval(lBreak, 1000);
}
