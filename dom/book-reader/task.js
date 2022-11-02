const fontSize = Array.from(document.querySelectorAll('.font-size'));
const bookControlColor = Array.from(document.querySelectorAll('.book__control_color .color'));
const bookControlBg = Array.from(document.querySelectorAll('.book__control_background .color'));
const book = document.getElementById('book');

let indexActive = 1,
    indexClick = 0;

fontSize.forEach((item) => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    findIndexActive(fontSize);
    indexClick = fontSize.indexOf(item);

    fontSize[indexActive].classList.remove('font-size_active');
    item.classList.add('font-size_active');

    if (indexClick == 0) {
      book.classList.add('book_fs-small');
      book.classList.remove('book_fs-big');
    }

    if (indexClick == 1) {
      book.classList.remove('book_fs-small', 'book_fs-big');
    }

    if (indexClick == 2) {
      book.classList.add('book_fs-big');
      book.classList.remove('book_fs-small');
    }
  })
})

bookControlColor.forEach((item) => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    findIndexActive(bookControlColor);

    indexClick = bookControlColor.indexOf(item);

    bookControlColor[indexActive].classList.remove('color_active');
    item.classList.add('color_active');

    changeContent('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
  })
})

bookControlBg.forEach((item) => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    findIndexActive(bookControlBg);

    indexClick = bookControlBg.indexOf(item);

    bookControlBg[indexActive].classList.remove('color_active');
    item.classList.add('color_active');

    changeContent('book_bg-black', 'book_bg-gray', 'book_bg-white');
  })
})

function findIndexActive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains('font-size_active') || arr[i].classList.contains('color_active')) {
      indexActive = i;
    }
  }
}

function changeContent(className1, className2, className3) {
  if (indexClick == 0) {
    book.classList.add(className1);
    book.classList.remove(className2, className3);
  }

  if (indexClick == 1) {
    book.classList.add(className2);
    book.classList.remove(className3, className1);
  }

  if (indexClick == 2) {
    book.classList.add(className3);
    book.classList.remove(className1, className2);
  }
}
