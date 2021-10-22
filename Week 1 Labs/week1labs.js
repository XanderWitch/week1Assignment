//create a variable to hold the quantity of available plane seats left on a flight
var availablePlaneSeats = 6;
		
//create a variable to hold the cost of groceries at checkout
var costOfGroceries = 1;

//create a variable to hold a person's middle initial
var middleInitial = "A";

//create a variable to hold true if it's hot outside and false if it's cold outside
var isHotOut = true;

//create a variable to hold a customer's first name
var firstName = "Alex";

//create a variable to hold a street address
var streetAddress = "123 Main Street";

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log("Is it hot outside? " + isHotOut + ".");
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats -=2;

//impulse candy bar purchase, add 2.15 to the grocery total
costOfGroceries += 2.15;

//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries += 2.15;

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "C";


//the season has changed, update the hot outside variable to be opposite of what it was
isHotOut = false;

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = firstName + " " + middleInitial + "." + "Gomez"

//print a line to the console that introduces the customer and says they live at the address variable
console.log("This is " + fullName + ", and they live at " + streetAddress + ".");

console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log("Is it hot outside? " + isHotOut + ".");
console.log(streetAddress);