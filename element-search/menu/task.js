const menuMain = document.querySelectorAll('.menu.menu_main');

menuMain.forEach(function (menuItem) {
  const menuLink = menuItem.querySelectorAll('.menu__link');

  menuLink.forEach(function (item) {
    item.addEventListener('click', function (event) {
      let subMenuDown = this.closest('.menu__item').querySelector('.menu_sub');

      if (subMenuDown) {
        event.preventDefault();

        menuItem.querySelectorAll('.menu_active').forEach(function (item) {
          item.classList.remove('menu_active');
        });

        subMenuDown.classList.add('menu_active');
      }
    })
  })
})