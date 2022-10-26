const tabs = document.querySelectorAll('.tab__navigation');
const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

let index = 0;

function removeTab() {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i].classList.contains('tab_active')) {
      tab[i].classList.remove('tab_active');
      tabContent[i].classList.remove('tab__content_active');
    }
  }
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', (e) => {
    index = Array.from(tab).indexOf(e.target);
    removeTab();
    tab[index].classList.add('tab_active');
    tabContent[index].classList.add('tab__content_active');
  })
}
