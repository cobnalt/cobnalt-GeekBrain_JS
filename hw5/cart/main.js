// Сделать генерацию корзины динамической: верстка корзины не должна
//  находиться в HTML-структуре. Там должен быть только div,
//  в который будет вставляться корзина, сгенерированная на базе JS:
// Пустая корзина должна выводить строку «Корзина пуста»;
// Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

const bascet = [];

function Product(name, descr, quantity, price) {
  this.name = name;
  this.descr = descr;
  this.quantity = quantity;
  this.price = price;
  this.total = function() {
    return this.quantity * this.price;
  }
}

let prod1 = new Product('Prod1', 'qwqeoieuw', 2, 10);
let prod2 = new Product('Prod2', 'qwqeoieuw', 5, 18);
let prod3 = new Product('Prod3', 'qwqeoieuw', 7, 12);
bascet.push(prod1, prod2, prod3);


function countBasketPrice(arr) {
  return arr.reduce(function(sum, current) {
    return sum + current.total();
  }, 0);
}

const cart = document.querySelector('#cart');
const cart_empty = `<p>Корзина пуста</p>`;
const cart_goods = `<p>В корзине: ${bascet.length} товара(ов) на
сумму ${countBasketPrice(bascet)} рубля(ей)</p>`;
if (bascet.length == 0) {
  cart.insertAdjacentHTML('afterbegin', cart_empty);
} else {
  cart.insertAdjacentHTML('afterbegin', cart_goods);
}
