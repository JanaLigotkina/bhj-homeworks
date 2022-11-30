const cart = document.querySelector('.cart__products');
const cardAddButton = Array.from(document.querySelectorAll('.product__add'));
const quantityValue = Array.from(document.querySelectorAll('.product__quantity-value'));
const productImage = Array.from(document.querySelectorAll('.product__image'));

const dec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const inc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));

let productIndex = null;
let cardProductCount = null;


for (let i = 0; i < dec.length; i++) {
  dec[i].addEventListener('click', () => {
    if (Number(quantityValue[i].innerText) == 0) {
      quantityValue[i].innerText = 0
    } else {
      quantityValue[i].innerText = Number(quantityValue[i].innerText) - 1;
      cardProductCount.innerText = quantityValue[i].innerText
    }
  })
}

for (let i = 0; i < inc.length; i++) {
  inc[i].addEventListener('click', () => {
    quantityValue[i].innerText = Number(quantityValue[i].innerText) + 1;
    cardProductCount.innerText = quantityValue[i].innerText
  })
}

cardAddButton.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    productIndex = index;
    if (quantityValue[productIndex].innerText > 0) {
      cardPush(productIndex);
    } else {
      alert('Выберите количество');
    }
  })
})

function cardPush(index) {
  let cardProduct = document.createElement('div');
  cart.appendChild(cardProduct);
  cardProduct.className = 'cart__product';
  cardProduct.setAttribute('data-id', productIndex);

  let cardProductImage = document.createElement('img');
  cardProduct.appendChild(cardProductImage);
  cardProductImage.className = 'cart__product-image';
  cardProductImage.src = productImage[productIndex].src;

  cardProductCount = document.createElement('div');
  cardProduct.appendChild(cardProductCount);
  cardProductCount.className = 'cart__product-count';
  cardProductCount.innerText = quantityValue[productIndex].innerText;
}
