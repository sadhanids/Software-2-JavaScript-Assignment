const participants = [];

let numofParticipants = prompt("Enter the number of participants:");
numofParticipants = parseInt(numofParticipants);

for (let i = 0; i < numofParticipants; i++) {
  let name = prompt("Enter name of the participant "+ (i+1) + ":")
  participants.push(name);
}

participants.sort();
let nameList = "<ol>";

for (const name of participants ) {
  nameList += "<li>" + name + "</li>"

}
nameList += "</ol>";

document.querySelector("#target").innerHTML = nameList;