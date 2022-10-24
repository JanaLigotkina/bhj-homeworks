let modalOpen = document.getElementById('modal_main');
let modalOpenSuccess = document.getElementById('modal_success');
let modalSuccess = document.querySelectorAll('.show-success');
let modalClose = document.querySelectorAll('.modal__close_times');

window.onload = function() {
  modalOpen.classList.add('modal_active');
}

Array.from(modalSuccess).forEach(function(item) {
  item.addEventListener('click', function() {
    modalOpenSuccess.classList.add('modal_active');
  });
});

Array.from(modalClose).forEach(function(item) {
  item.addEventListener('click', function() {

    if (modalOpen.classList.contains('modal_active')) {
      modalOpen.classList.remove('modal_active');
    }

    if (modalOpenSuccess.classList.contains('modal_active')) {
      modalOpenSuccess.classList.remove('modal_active');
    }
  });
});
