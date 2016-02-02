var = userChoice = prompt("Choose a number!");

var computerChoice = Math.floor((Math.random() *50) + 1);

console.log(computerChoice);

if (userChoice < 35) {
	console.log("Your number is lower")
}

else (userChoice > 35) {
	console.log("Your number is higher")
}