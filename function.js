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

function generate(start ,end){
for (let i = start; i <= end; i++) {
        if (i === 15) {
            return 'interrupted';
        }
           console.log(i);
}
}
console.log(generate(10, 20)); // it will print numbers from 10 to 15 and then return 'interrupted'

