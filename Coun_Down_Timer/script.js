const startButton = document.getElementById("startButton");
const timeInput = document.getElementById("timeInput");
const countdownDisply = document.getElementById("countdownDisply");

function startTimer() {
  let valueInSeconds = parseInt(timeInput.value);
  console.log(valueInSeconds);

  if (isNaN(valueInSeconds)) {
    countdownDisply.innerText = "Please enter a valid number";
    return;
  }

  if (valueInSeconds <= 0) {
    countdownDisply.innerText = "please enter seconds > 0";
    return;
  }

  //...

  const timer = setInterval(function () {
    valueInSeconds--;
    countdownDisply.innerText = `Time remaining: ${valueInSeconds} seconds`;

    if (valueInSeconds <= 0) {
      clearInterval(timer);
      countdownDisply.innerText = `Time-up ⏰`
    }
  }, 1 * 1000);
}

startButton.addEventListener("click", startTimer);
