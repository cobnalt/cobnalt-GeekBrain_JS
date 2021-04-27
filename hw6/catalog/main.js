const catalog = [];
const cart = [];

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

const htmlCatalog = document.querySelector('#catalog');
const htmlCart = document.querySelector('#cart');

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
  if (cart.length == 0) {
    htmlCart.textContent ='';
    const cart_empty = `<p>Корзина пуста</p>`;
    htmlCart.insertAdjacentHTML('afterbegin', cart_empty);
  } else {
    htmlCart.textContent ='';
    const cart_goods = `<p>В корзине: ${cart.length} товара(ов) на
    сумму ${countBasketPrice(cart)} рубля(ей)</p>`;
    htmlCart.insertAdjacentHTML('afterbegin', cart_goods);
  }
}

htmlCatalog.addEventListener('click', function(e){
  if(e.target.tagName === "A") {
    e.preventDefault();
    const index = Number(e.target.dataset.id);
    cart.push(catalog[index]);
    cartDraw(cart);
  }
})
cartDraw(cart);
