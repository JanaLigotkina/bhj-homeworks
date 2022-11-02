const reveal = document.querySelectorAll('.reveal');
let data = {};

function isVisible(reveal) {

  for (let i = 0; i < reveal.length; i++) {

    let getClientRect = reveal[i].getBoundingClientRect()
    data[i] = {};

    if (getClientRect.bottom < 0) {
      data[i]['result'] = false;
    } else if (getClientRect.top > window.innerHeight) {
      data[i]['result'] = false;
    } else {
      data[i]['result'] = true;
    }
  }
  return data;
}

document.addEventListener('scroll', function () {
  isVisible(reveal);

  for (let i = 0; i < Object.entries(data).length; i++) {

    if (data[i]['result'] == true) {
      reveal[i].classList.add('reveal_active');
    }
  }
})
