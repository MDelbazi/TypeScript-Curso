"use strict";
(() => {
    const addNumbers = (num1, num2) => num1 + num2;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'Salvaste el Mundo!!!';
    let myFunction;
    myFunction = addNumbers(1, 2);
    console.log(myFunction);
    myFunction = greet('Martin');
    console.log(myFunction);
    myFunction = saveTheWorld();
    console.log(myFunction);
});
