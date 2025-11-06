'user strict'

const number1 = parseInt(prompt("Enter the first number: "));

const number2 = parseInt(prompt("Enter the second number: "));

const number3 = parseInt(prompt("Enter third number: "))

const sum_of_numbers = number1 + number2 + number3
const product_of_numbers = (number1*number2*number3)
const average_of_numbers = (number1+number2+number3)/3

console.log("Sum:", sum_of_numbers)
console.log("Average:", average_of_numbers)
console.log("Product:", product_of_numbers)

const outputresult =`
    Sum: ${sum_of_numbers} <br>
    Product:${product_of_numbers} <br>
    Average:${average_of_numbers.toFixed(2)}
    `
document.querySelector("#target").innerHTML = outputresult;
