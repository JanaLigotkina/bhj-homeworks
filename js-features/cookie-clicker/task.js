let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');

cookie.onclick = function() {
  clickerCounter.textContent++;

  if (clickerCounter.textContent % 2 !== 0) {
    cookie.width = 150;
    cookie.height = 100; // мне кажется, что тут достаточно было бы только ширину менять
  } else {
    cookie.width = 200;
    cookie.height = 127;
  }
}
