//Global Scope

var message = 'Hello, Platzi!!';
console.log(message);
var $ = function (message){
 console.log("Say: " + message);
}; //Scope de funciones

$("Hello Daniel");

function printNumbers() {
 for (var i = 0; i < 10; i++) {
  setTimeout(function () {
   console.log(i);
  }, 1000) 
 }}

 printNumbers();

 function printNumbers() {
  var i;
  for (let i = 0; i < 10; i++) {
   function eventuallyPrintNumber(n) {
    setTimeout(function (){
     console.log(n);
    }, 1000);
   };
   eventuallyPrintNumber(i);
  };
 };

printNumbers();

//Block Scope

function printNumbers() {
 for (let i = 0; i < 10; i++) {
  setTimeout(function () {
   console.log(i);
  }, 1000) 
 }}

 printNumbers();