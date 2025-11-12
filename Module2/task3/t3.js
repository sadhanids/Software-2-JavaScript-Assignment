const dogName = [];
noofDogs = 6

for (let i = 0; i < 6; i++){
  const Name = prompt("Enter name of the Dog: "+ (i+1) +":")
  dogName.push(Name)
}

dogName.sort();
dogName.reverse();
let dognameList = "<ul>";

for (name of dogName) {
  dognameList += "<li>" + name + "</li>"

}

dognameList += "</ol>";

document.querySelector("#target").innerHTML = dognameList