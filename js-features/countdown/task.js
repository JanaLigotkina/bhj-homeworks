// Таймер обратного отсчета (секунды)

// let timer = document.getElementById('timer');

// let intervalId = setInterval(function() {
//   timer.textContent -= 1;

//   if (timer.textContent == 0) {
//     clearInterval(intervalId);
//     alert('Вы победили в конкурсе!');
//   }

// }, 1000);


// Таймер обратного отсчета (часы:минуты:секунды)
let hours = 0;
let minutes = 0;
let seconds = 59;
let dateCurrent = new Date();
let timer = document.getElementById("timer");
let intervalId;

dateCurrent.setHours(hours);
dateCurrent.setMinutes(minutes);
dateCurrent.setSeconds(seconds);
timer.innerHTML = dateCurrent.toTimeString().split(" ")[0];

function updateTimer() {
  let time = dateCurrent.getTime();
  dateCurrent.setTime(time - 1000);
  timer.innerHTML = dateCurrent.toTimeString().split(" ")[0];

  if (dateCurrent.getSeconds() === 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}

intervalId = setInterval(updateTimer, 1000);
