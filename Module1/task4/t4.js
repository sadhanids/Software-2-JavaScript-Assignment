const randomNumber = Math.floor(Math.random() * 4 + 1)

const name = prompt("Enter your name: ")

console.log(randomNumber)

switch (randomNumber) {
  case 1:
    console.log(`${name}, you are Ravenclaw.` )
    break
  case 2:
    console.log(`${name}, you are Gryffindor.` )
    break
case 3:
    console.log(`${name}, you are Slytherin.` )
    break
case 4:
    console.log(`${name}, you are Hufflepuff.` )
    break
}

switch (randomNumber) {
  case 1:
    result = `${name}, you are Ravenclaw.`
    break
  case 2:
    result = `${name}, you are Gryffindor.`
    break
case 3:
    result = `${name}, you are Slytherin.`
    break
case 4:
    result = `${name}, you are Hufflepuff.`
    break
}

document.querySelector("#target").innerHTML = result;
