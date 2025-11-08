
const answer = confirm("Should I calculate the square root?")
let result = "";

if (answer) {
  const number = prompt("Enter a number to calculate square root of the number:");

  if (number < 0) {
    result = "The square root of a negative number is not defined.";
  } else {
    const squareroot = Math.sqrt(number);
    result = "The square root is: " + squareroot;
  }
} else {
  result = "The square root is not calculated.";
}

document.querySelector("#target").innerHTML = result;