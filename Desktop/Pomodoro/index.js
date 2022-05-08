var actualMins = 24;
var actualSec = 60;

let Timer = () => {
  actualSec = actualSec - 1;
  if (actualSec == 0) {
    actualMins = actualMins - 1;
    actualSec = 60;
  }

  document.getElementById("display").innerHTML = actualMins + " : " + actualSec;
};

function timer() {
  setInterval(Timer, 1000);
}
