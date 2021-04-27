// Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, надо получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 надо получить следующий объект:
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение
// с помощью console.log и вернуть пустой объект.

function numToObj(num) {
  if (num < 1000) {
    return {
    units: num % 100 % 10,
    dozens: parseInt((num % 100) / 10),
    hundreds: parseInt(num / 100)};
  } else {
    console.log("Необходимо ввести число меньше 1000");
    return {};
  }
}
console.log(numToObj(17));

// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов.
// Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.
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
console.log(bascet);

function countBasketPrice(arr) {
  return arr.reduce(function(sum, current) {
    return sum + current.total();
  }, 0);
}

console.log(`Общая стоимость товаров в корзине составит ${countBasketPrice(bascet)}`);
