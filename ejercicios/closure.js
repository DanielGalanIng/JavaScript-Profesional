//Closure

let color = 'Green'; //La variable es este momento se encuentra de manera global
function printColor() {
 console.log(color);
}
printColor();

//IIFE immediatly Invoce function Expression: 

(function () {
 let color = 'Green'; //Enta dentro del scope local
function printColor() {
 console.log(color);
}
printColor();
})();//La funcion salio del entorno global

//Funciones que regresan funciones

function makeColorPrinter(color) {
 let colorMessage = `The color is ${color}`;
 return function () {
  console.log(colorMessage);
 }
}

let greenColorPrinter = makeColorPrinter("Green");
console.log(greenColorPrinter());//Nos regresa la función para evitar esto, debe ir console.log(greenColorPrinter());

//Variable privadas

const counter = {
 count: 3
}

console.log(counter.count); //si quiero evitar que el 3 salga

//Función para variaables privadas

function makeCounter(n) {
 let count = n;
 return {
  increase: function () {
   count = count + 1;
  },
  decrease: function () {
   count = count - 1;
  },
  getCount: function () {
   return count;
  },
 }
}
let counter = makeCounter(7);
console.log(counter.count);
console.log(counter.decrease);
console.log('The count is:', counter.getCount());
counter.increase();
console.log('The count is:', counter.getCount());
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log('The count is:', counter.getCount());