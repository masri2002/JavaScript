/*
  Fuction

*/

// console.log(typeof console.log);

// function sayHello(firstName , age ) {
//     if (age<20) {
//         console.log('you are young , this app is not for you'+ ' ' + firstName);
//     }else {
//             console.log(`hello ${firstName} you are ${age} years old`);
//     }
// }

// sayHello('ahmad' , 20);
// sayHello('saleem' , 12);
// sayHello('ali' , 30);
// sayHello('sara' , 15);
// sayHello('shahed' , 25);
// sayHello('sara' , 18);

// sayHello('sara' , 18);


// function gernerateYears(startYear, endYear ,excluedYear) {
//     for (let i = startYear; i <= endYear; i++) {
//         if (i === excluedYear) {
//             continue;
//         }
//         console.log(i);
//     }
// }

// gernerateYears(2000, 2023 , 2010);


// function sayHello(firstName, age) {
// return 'hello ' + firstName + ' you are ' + age + ' years old';
// }

// console.log(sayHello('ahmad', 20));
// let result = sayHello('saleem', 12);
// console.log(result);

// function generate(start ,end){
// for (let i = start; i <= end; i++) {
//         if (i === 15) {
//             return 'interrupted';
//         }
//            console.log(i);
// }
// }
// console.log(generate(10, 20)); // it will print numbers from 10 to 15 and then return 'interrupted'

// function sayHello(firstName, age= 'unknown') {

//     return 'hello ' + firstName + ' you are ' + age + ' years old';
//  }

//  console.log(sayHello('ahmad', 20));
//  console.log(sayHello('saleem')); // age will be 'unknown'

// function calc(...numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// console.log(calc(1, 2, 3, 4, 5)); // Output: 15

// function showInfo(us="Un",ag="Un",rt="Un",show="yes",...sk){
//     document.write(`<div>`);
//     document.write(`<h1>Welcome ${us}</h1>`);
//     document.write(`<p>Age: ${ag}</p>`);
//     document.write(`<p>Hour Rate: ${rt}</p>`);
//     if (show === "yes") {
//         if (sk.length === 0) {
//             sk = ["No skills"];
//         }
//         document.write(`<p>Skills: ${sk.join(' | ')}</p>`);
//     } else {
//         document.write(`<p>Skills are hidden</p>`);
//     }
//     document.write(`</div>`);
// }
// showInfo("ahmad", 20, 50,"yes");
// showInfo("saleem", 25, 60,"no", "Python", "Django");
// showInfo("ali", 30, 70,"yes", "Java", "Spring", "Hibernate");

function showDetails(a, b, c) {
if (typeof a === 'string' && typeof b === 'number' && typeof c === 'boolean') {
    console.log(`Hello ${a}, Your Age Is: ${b}, You ${c== true ? "Are" : "Are Not"} Available to hire`);
}
if (typeof a === 'number' && typeof b === 'boolean' && typeof c === 'string') {
    console.log(`Hello ${a}, Your Age Is: ${b}, You ${b== true ? "Are" : "Are Not"} Available to hire`);
}
if (typeof a === 'boolean' && typeof b === 'string' && typeof c === 'number') {
    console.log(`Hello ${b}, Your Age Is: ${c}, You ${a== true ? "Are" : "Are Not"} Available to hire`);
}
}
showDetails("ahmad", 20, true);
showDetails(20, false, "ahmad");
showDetails(true, "ahmad", 20);