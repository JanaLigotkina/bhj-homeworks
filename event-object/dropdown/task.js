const dropDown = document.querySelector('.dropdown');
const dropDownValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownItem = document.querySelectorAll('.dropdown__item');

dropDown.addEventListener('click', () => {
  dropDownList.classList.toggle('dropdown__list_active');
})

Array.from(dropDownItem).forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    dropDownValue.textContent = item.textContent;
    if(dropDownValue.classList.contains('dropdown__list_active')) {
      dropDownList.classList.remove('dropdown__list_active');
    }
  })
})
