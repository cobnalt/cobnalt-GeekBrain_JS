const catalog = [];
const cart = [];

const htmlBody = document.querySelector('#body');
const htmlCatalog = document.querySelector('#catalog');
const htmlCart = document.querySelector('#cart');
const htmlPopup = document.querySelector('#popup');

function Product(name, descr, quantity, price) {
  this.name = name;
  this.descr = descr;
  this.quantity = quantity;
  this.price = price;
  this.total = function() {
    return this.quantity * this.price;
  }
}

let prod1 = new Product('Prod1', 'Продукт1', 2, 10);
let prod2 = new Product('Prod2', 'Продукт2', 5, 18);
let prod3 = new Product('Prod3', 'Продукт3', 7, 12);
catalog.push(prod1, prod2, prod3);


htmlCatalog.insertAdjacentHTML('afterbegin', '<h1 class="h1">Каталог</h1>');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
htmlCatalog.append(wrapper);
catalog.forEach(function(item, i) {
  const html = `<div class="card">
  <p class=card__title>${item.name}</p>
  <p class=card__descr>${item.descr}</p>
  <p class=card__price>${item.price} руб.</p>
  <a href="" class="card__buy" data-id="${i}">Купить</a>
  </div>`
  wrapper.insertAdjacentHTML('beforeend', html);
})

function countBasketPrice(arr) {
  return arr.reduce(function(sum, current) {
    return sum + current.price;
  }, 0);
}

function cartDraw(cart) {
  htmlCart.textContent ='';
  if (cart.length == 0) {
    const cart_empty = `<p>Корзина пуста</p>`;
    htmlCart.insertAdjacentHTML('afterbegin', cart_empty);
  } else {
    const cart_goods = `<p>В корзине: ${cart.length} товара(ов) на
    сумму ${countBasketPrice(cart)} рубля(ей). Перейти в
    <span id="show-cart">корзину</span></p>`;
    htmlCart.insertAdjacentHTML('afterbegin', cart_goods);
  }
};
function popupDraw(arr) {
  htmlPopup.textContent ='';
  if (arr.length == 0) {
    const cart_empty = `<p>Корзина пуста</p>`;
    htmlPopup.insertAdjacentHTML('afterbegin', cart_empty);
  } else {
    const cart_goods_popup = `<p>В корзине: ${arr.length} товара(ов) на
    сумму ${countBasketPrice(arr)} рубля(ей).`;
    htmlPopup.insertAdjacentHTML('afterbegin', cart_goods_popup);
  }
  const arr_name = ['Состав корзины', 'Адрес доставки', 'Комментарий'];
  for (let i = 0; i < arr_name.length; i++) {
    const html = `<div data-id=${i} class="${i !== 0 ? 'inactive': ''}">
      <h3>${arr_name[i]}</h3>
      <button data-bid=${i}>Далее</button>
    </div>`;
    htmlPopup.insertAdjacentHTML('beforeend', html);
  }
};

htmlCatalog.addEventListener('click', function(e){
  if(e.target.tagName === "A") {
    e.preventDefault();
    const index = Number(e.target.dataset.id);
    cart.push(catalog[index]);
    cartDraw(cart);
  }
})
cartDraw(cart);

const htmlShowCart = document.querySelector('#show-cart');

htmlCart.addEventListener('click', function(e){
  if (e.target.tagName === 'SPAN') {
    htmlPopup.style.display = 'block';
    popupDraw(cart);
  }
});
htmlBody.addEventListener('keydown', function(e){
  if(e.key === "Escape") {
    htmlPopup.style.display = 'none';
  }
});
htmlPopup.addEventListener('click', function(e){
  if(e.target.tagName === "BUTTON") {
    const index = Number(e.target.dataset.bid);
    const currentEl = htmlPopup.querySelector(`div[data-id="${index}"]`);
    currentEl.classList.toggle('inactive');
    const nextEl = htmlPopup.querySelector(`div[data-id="${index+1>2?0:index+1}"]`);
    nextEl.classList.toggle('inactive');
  }
});
