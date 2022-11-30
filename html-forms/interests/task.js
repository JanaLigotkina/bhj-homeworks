const interest = document.querySelectorAll('.interests > .interest');
const interestCheck = document.querySelectorAll('.interest__check');
const interestsActive = document.querySelectorAll('.interests_active');

interestCheck.forEach((index) => {
  index.addEventListener('click', (e) => {
    const el = e.target;
    const checkedStatus = el.checked;
    const parentInterest = el.parent('.interest');

    parentInterest.querySelector('.interest__check').indeterminate = checkedStatus;

    parentInterest.querySelectorAll('.interests .interest__check').forEach((item) => {
      item.checked = checkedStatus;
    })
  })
})