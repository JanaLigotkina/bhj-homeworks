const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let deadCounter = dead.textContent;
let lostCounter = lost.textContent;

getHole = index => document.getElementById(`hole${index}`);

for (holeIndex = 1; holeIndex < 10; holeIndex++) {
  let hole = getHole(holeIndex);

  hole.onclick = function() {
    if (hole.classList.contains('hole_has-mole')) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }

    if (dead.textContent == 10) {
      alert ('Вы выиграли!');
      dead.textContent = 0;
      lost.textContent = 0;
    }

    if (lost.textContent == 5) {
      alert ('Вы проиграли!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }
}
