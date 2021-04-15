var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

/*
Из-за того, что присутствуют операции с префиксной и постфиксной
формой, то и получаются разные значения. С префиксной сразу уведичивает значение
и возвращается результат, с постфиксной - сначала возвращается результат, потом
увеличивается значение.
*/

//Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); //5
console.log(x);
/*
По приоритету выполняется выражение в скобках, которое возвращает значение 4,
ну и дальше 1 + 4 равно 5
*/

/*
Объявить две целочисленные переменные — a и b и задать им произвольные начальные
 значения. Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность;
- если а и b отрицательные, вывести их произведение;
- если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
*/
var a = -12;
var b = -2;
if (a >= 0 && b >= 0) {
  console.log(a - b);
} else if (a < 0 && b < 0) {
  console.log(a * b);
}else {
  console.log(a + b);
}

/*
Присвоить переменной а значение в промежутке [0..15]. С помощью оператора
switch организовать вывод чисел от a до 15.
*/
var a = 7;
switch (a) {
  case 0:
    console.log(0);
  case 1:
    console.log(1);
  case 2:
    console.log(2);
  case 3:
    console.log(3);
  case 4:
    console.log(4);
  case 5:
    console.log(5);
  case 6:
    console.log(6);
  case 7:
    console.log(7);
  case 8:
    console.log(8);
  case 9:
    console.log(9);
  case 10:
    console.log(10);
  case 11:
    console.log(11);
  case 12:
    console.log(12);
  case 13:
    console.log(13);
  case 14:
    console.log(14);
  case 15:
    console.log(15);
}

/*
Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return.
*/
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции.
В зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "add":
      return add(arg1, arg2);
      break;
    case "sub":
      return sub(arg1, arg2);
      break;
    case "mult":
      return mult(arg1, arg2);
      break;
    case "div":
      return div(arg1, arg2);
      break;
  }
}
console.log(mathOperation(5, 10, 'div'));

/*
* Сравнить null и 0. Объяснить результат.
*/
console.log(null == 0); //false
//Значения null и undefined равны друг другу, но не чему бы то ни было еще.

/*
* С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/
// только для положительных степеней
function power(val, pow) {
  if (pow == 0) {
    return 1;
  }
  return val * power(val, pow - 1);
}
console.log(power(3, 3));
