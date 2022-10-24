let sliderItem = document.querySelectorAll('.slider__item');
let sliderArrowPrev = document.querySelectorAll('.slider__arrow_prev');
let sliderArrowNext = document.querySelectorAll('.slider__arrow_next');
let sliderDot = document.querySelectorAll('.slider__dot');
let currentSlide = 0;

Array.from(sliderArrowNext).forEach(function (item) {
  item.addEventListener('click', function () {
    ++currentSlide;
    if (currentSlide >= sliderItem.length) {
      sliderItem[currentSlide - 1].classList.remove('slider__item_active');
      currentSlide = 0;
      sliderItem[currentSlide].classList.add('slider__item_active');
    } else {
      sliderItem[currentSlide - 1].classList.remove('slider__item_active');
      sliderItem[currentSlide].classList.add('slider__item_active');
    }
  })
})

Array.from(sliderArrowPrev).forEach(function (item) {
  item.addEventListener('click', function () {
    if (currentSlide <= 0) {
      sliderItem[currentSlide + 1].classList.remove('slider__item_active');
      currentSlide = sliderItem.length - 1;
      sliderItem[currentSlide].classList.add('slider__item_active');
    } else {
      --currentSlide;
      sliderItem[currentSlide + 1].classList.remove('slider__item_active');
      sliderItem[currentSlide].classList.add('slider__item_active');
    }
  })
})

Array.from(sliderDot).forEach(function(item, i) {
  item.addEventListener('click', function() {

    for (let i = 0; i < sliderDot.length; i++) {
      if (sliderDot[i].classList.contains('slider__dot_active')) {
        sliderDot[i].classList.remove('slider__dot_active');
      }
    }

    sliderDot[i].classList.add('slider__dot_active');

    for (let i = 0; i < sliderItem.length; i++) {
      if (sliderItem[i].classList.contains('slider__item_active')) {
        sliderItem[i].classList.remove('slider__item_active');
      }
    }

    sliderItem[i].classList.add("slider__item_active");
  })
})




























// let sliderItem = Array.from(document.querySelectorAll('.slider__item'));
// let sliderArrow = document.querySelectorAll('.slider__arrow');
// let currentSliderItem = 0;

// Array.from(sliderArrow).forEach(function(item) {
//   item.addEventListener('click', function() {
//     findCurrentSlide();

//     if (item.classList.contains( 'slider__arrow_next' )) {
//       changeSlideNext();
//     } else if (item.classList.contains( 'slider__arrow_prev' )) {
//       changeSlidePrev();
//     }
//   })
// });

// function findCurrentSlide() {
//   for (let item = 1; item < sliderItem.length; item++) {
//     if (sliderItem[item].classList.contains( 'slider__item_active' )) {
//       currentSliderItem = item;
//       if (currentSliderItem == sliderItem.length) {
//         currentSliderItem = 0;
//         console.log(currentSliderItem);
//         return currentSliderItem;
//       }
//     }
//   }
//   return currentSliderItem;
// }


// function changeSlideNext() {
//   sliderItem[currentSliderItem].classList.remove('slider__item_active');
//   sliderItem[currentSliderItem + 1].classList.add('slider__item_active');
// }

// function changeSlidePrev() {
//   sliderItem[currentSliderItem].classList.remove('slider__item_active');
//   sliderItem[currentSliderItem - 1].classList.add('slider__item_active');
// }