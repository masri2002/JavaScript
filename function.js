/*
  Fuction

*/

// console.log(typeof console.log);

function sayHello(firstName , age ) {
    if (age<20) {
        console.log('you are young , this app is not for you'+ ' ' + firstName);
    }else {
            console.log(`hello ${firstName} you are ${age} years old`);
    }
}

sayHello('ahmad' , 20);
sayHello('saleem' , 12);
sayHello('ali' , 30);
sayHello('sara' , 15);
sayHello('shahed' , 25);
sayHello('sara' , 18);
