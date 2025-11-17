function commenceProgram() {
  let numbers = [];

  while (true){
    let input = prompt("Enter a number: ");

    if (input === null){
      alert("Program cancelled");
      return
    }

    let num= Number(input);
    if (isNaN (num)){
      alert("Please enter a valid number ");
      continue;
    }

    if (numbers.includes(num)){
      alert(num + " was already entered")

      numbers.sort((a,b) => a - b);
      console.log("Numbers entered (sorted): ", numbers);
      return;
    }
    numbers.push(num);

  }
}
commenceProgram();
