const numbers =[];

while (true) {
  let inputNum = prompt("Enter a number or 0 to stop and sort the list: ");

  const num = Number(inputNum);
  if (num === 0) {
    break;
  }

  if (num>0) {
    numbers.push(num)
  }

}

numbers.sort((a,b) => b - a);
console.log ("Numbers sorted from largest to smallest: ", numbers)

document.querySelector("#target").innerHTML = numbers