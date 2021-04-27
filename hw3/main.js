// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 2;
while (i <= 100) {
  let flag = false;
  let j = 2;
  while (j < i) {
    if (i % j == 0) {
      flag = true;
      break;
    }
    j++;
  }
  if (!flag) {
    console.log(i);
  }
  i++;
}
/*
С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
let price = [10, 13, 53, 342, 12, 67];

function countBasketPrice(arr) {
  let basketSum = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return basketSum;
}
console.log(countBasketPrice(price));

// * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла
for (let i = 0; i < 10; console.log(i++)) {

}

// * Нарисовать пирамиду с 20 рядами с помощью console.log
let star = '';
for (let i = 1; i <= 20; i++) {
  console.log(star += "*");
}
