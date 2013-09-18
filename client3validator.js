var phnum = prompt ("Please enter your phone number including dashes. This number will not be given to anyone!" );

if (phnum.charAt(3) === "-" && phnum.charAt(7) === "-"){
	alert("Thank you (for your valid phone number)!" )
}
else {
	alert("That number is not valid. Please try again." )
}

var birthdate = prompt ("Please enter your birth date (format: 06/07/88):" );

if (birthdate.charAt(2) === "/" && birthdate.charAt(5) === "/" && birthdate.length === 7) {
	alert("Thank you for your vailid birth date.")
}
else {
	alert("Please try again." )
}

var zipcode = prompt ("Please enter your zipcode:");

if (zipcode.length === 5 || zipcode.length === 10) {

	alert("zipcode successfully entered.")
}
else {

	alert("Please enter your zipcode again.")
}

var state = prompt ("Please enter your two letter State name in caps:");

if (state.length === 2 && state === state.toUpperCase()) {

	alert ("You inputted two UPPER CASE characters. Thank you.")

}
else {

	alert("Please try again. Enter two upper case letters.")
}


var marriage = prompt ("Are you married? Please enter YES or NO.");

var lowmarriage = marriage.toLowerCase();


if (lowmarriage === "yes" || lowmarriage ==="no" ) {

	alert("Thank you for your marrital status.")
}
else {
	alert("Please try to enter your marrital status again.")
}





/* if (phnum.charAt(3) === "-" && phnum.charAt(7) === "-"){
	alert("Thank you (for your valid phone number)!" )
}
else {
	alert("That number is not valid. Please try again." )
}







	
	


/* var word = prompt ("Enter any word:" );
alert("You entered: " */



