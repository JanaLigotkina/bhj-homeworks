function textСhangeRotator() {
  const rotator = document.querySelectorAll('.rotator');

  rotator.forEach(function (index) {
    const rotatorCaseActive = index.querySelector('.rotator__case_active');
    const nextElement = rotatorCaseActive.nextElementSibling;

    rotatorCaseActive.classList.remove('rotator__case_active');

    if (nextElement) {
      nextElement.classList.add('rotator__case_active');
    } else {
      index.querySelector('.rotator__case').classList.add('rotator__case_active');
    }
  })
}

setInterval(() => {
  textСhangeRotator();
}, 1000);