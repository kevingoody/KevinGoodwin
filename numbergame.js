
//This is my opening statement to the user
confirm("I am ready to play!");
//This is declaring my variables
var myNumber = Math.floor((Math.random() *50) + 1);
var userNumber = prompt("Choose a number")
//This begins my first set of if/else statements
if (myNumber >= userNumber)
{
    alert("Your number is less than my number, try again!");
}
else
{
    alert("Your number is greater than my number. Good job!");
}

var userNumber = prompt("Choose another number")
if (userNumber === myNumber)
{
	console.log("We have the same number");
}
else
{
	console.log("Sorry, choose another number");
}