const numbers = [];
for (let i = 0; i < 5; i++) {
  let input = prompt('Enter number ' + (i+1) + ':');

const num = Number(input);
numbers.push(num);
}

const lastIndex = numbers.length - 1;
const reversedNumbers = [];
for (let i = lastIndex; i >= 0; i--) {
  console.log(numbers[i]);
  reversedNumbers.push(numbers[i]);
}
document.querySelector("#target").innerHTML = reversedNumbers;