// Сделать так, чтобы товары в каталоге выводились при помощи JS:
// Создать массив товаров (сущность Product);
// При загрузке страницы на базе данного массива генерировать вывод из него.
// HTML-код должен содержать только div id=”catalog” без вложенного кода.
// Весь вид каталога генерируется JS.


const catalog = [];

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
catalog.push(prod1, prod2, prod3);

const htmlCatalog = document.querySelector('#catalog');
htmlCatalog.insertAdjacentHTML('afterbegin', '<h1 class="h1">Каталог</h1>');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
htmlCatalog.append(wrapper);
catalog.forEach(function(item, i) {
  const html = `<div class="card">
  <p class=card__title>${item.name}</p>
  <p class=card__descr>${item.descr}</p>
  <p class=card__quant>${item.quantity} шт</p>
  <p class=card__price>${item.price} руб.</p>
  </div>`
  wrapper.insertAdjacentHTML('beforeend', html);
})
