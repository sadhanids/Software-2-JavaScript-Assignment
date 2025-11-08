'user strict';

const name = prompt("Please Enter your Name")

const greeting = `Hello, ${name}!!!!`

console.log(greeting);

document.querySelector("#target").innerHTML = greeting;