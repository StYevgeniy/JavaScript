// https://developer.mozilla.org/en-US/
// https://uk.javascript.info/


//..
//let value;
//console.log(value);
//value = 1;
//console.log(value);

//console.log(3 === "3"); // Number vs String
//console.log(3 == "3"); // Number vs Number

//...
// 1 undefined  => false
// 2 null       => false
// 3 0          => false
// 4 NaN        => false
// 5 ''         => false
// false        => false

//console.log(Boolean("false"));=>
//console.log(!!"false");

//console.log('Hellow world');

//....
// Примітивні типи даних ІМУТАБЕЛЬНІ ТИПИ ДАНИХ
// 1 Number
// 2 String
// 3 Boolean
// 4 Undefined
// 5 Null

// let a = 10;
// a = a + 2;
// a = 12;
// a += 2;

// const a = 10; //(не можливо змінити дані)

// Example 1 - Математичні оператори
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)

// Example 2 - Кміновані оператори
// let students = 100;
// // students = students + 50;
// students += 50;
// console.log(students);

// Example 3 - Приорітет операторів
// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Example 4 - Клас Math
// const value = 27.5;
// console.log(Math.floor(value)); // Округлить завжди в сторону більшого значення
// console.log(Math.random(value)); // Округлить завжди в сторону меньшого значення
// console.log(Math.round(value)); // Округлить завжди по математичному принципу

// Example 5 - Шаблонні рядки
// const name = "Artem";
// const age = 28;

// const result = name + ' years ' + age;
// console.log(result);

// String являється домінуючим типом даних
// const c =10 + 22 + "11" + 44;
// console.log(typeof c);

// const a = 2 * "3";
// console.log(typeof a); // Number

// const b = 6 + '3';
// console.log(typeof b); // Number

// const value = 10;
// const value_2 = '15';
// const result = value - Number(value_2);
// console.log(result);

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// // const message = companyName + ' has ' + (repairBots + defenceBots) + " bots in stock ";
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методи рядків та чейнінг

// let weight = '88,3';
// let height = '1.75';
// weight = Number(weight.replace(',','.'));
// // weight = Number(weight);
// height = Number(height);
// // height = +height;

// // const bmi = weight / Math.pow(height, 2);
// const bmi = Number((weight / height ** 2).toFixed(1));
// console.log(bmi); // 28.8

// Example 7 - Оператори порівняння та приведення типів

// console.log(5 > 4); //true

// console.log(10 >= '7'); //true

// console.log('2' > '12'); //true бере по юнікоду 32 > 31

// console.log('4' == 4); //true

// console.log('6' === 6); //false строго дорівняння порівняння по типу

// console.log('false' === false); //false

// console.log(1 == true); //true (true => 1, false => 0)

// console.log(1 === true); //false

// console.log('0' == false); //true

// console.log('0' === false); //false

// console.log('Papaya' === 'papaya'); //false

// console.log('Papaya' < 'papaya'); //true "P" < "p" 50 < 70

// console.log('papay' < 'papau'); //false
// p 70
// a 61
// p 70
// a 61
// y 79
// u 75

// console.log(undefined == null); //true

// console.log(undefined === null); //false

// Example 8 - Логічні оператори
// && I
// Повертає перший false або останній true

// console.log(true && 3); //

// console.log(false && 3); //false

// console.log(true && 4 && 'kiwi'); //kiwi

// console.log(true && 0 && 'kiwi'); //0

// || або
// АБО повертає перше значення яке приведеться до true або останній false

// console.log(true || 3); //true

// console.log(3 || true || 4); //3

// console.log(true || false || 7);

// console.log(null || 2 || undefined);
//           //false   true
// console.log((1 && null && 2) > 0); //false

// console.log(Number(null)); //0

// console.log(null || (2 && 3) || 4); //3

// 1 null => false
// 2 || АБО шукає перший true
// 3 2 && 3
// 4 2 => true
// 5 3 => true
// 3 || 4 => 3

// Example 9 Значення за замовчуванням та оператор нульового злиття (??)

const incomingValue = 5;
const result = incomingValue + Number('11') //nun
console.log(result)
const defaultValue = 10;
const value = result || defaultValue;
console.log(value);