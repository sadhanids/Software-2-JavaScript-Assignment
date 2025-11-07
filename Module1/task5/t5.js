const year = parseInt(prompt ("Enter a year to decide if it ia a leap year or not: "))

if (( year % 4 === 0 && year % 100 !== 0 ) || (year % 400 === 0))
{resultMessage = (`${year} is a leap year`)
} else {
  resultMessage = (`${year} is not a leap year`);
}


document.querySelector("#target").innerHTML = resultMessage;
