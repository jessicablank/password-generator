// Assignment Code
var generateBtn = document.querySelector("#generate");

//Ask user to input criteria of character length, lowercase, UPPERCASE,numeric, and/or special characters.
var charLength = prompt("Enter the number of characters required between 8 and 128");
if (charLength < 8 || charLength > 128) {
  alert("Please enter a number between 8 and 128");
}

var charLowercase = confirm("Do you want the password to contain lowercase letters?");

var charUppercase = confirm("Do you want the password to contain UPPERCASE letters?");

var charNumeric = confirm("Do you want the password to contain numbers?");

var charSpecial = confirm("Do you want the password to contain special characters?");



//Making sure variables are logged
console.log(charLength);
console.log(charLowercase);
console.log(charUppercase);
console.log(charNumeric);
console.log(charSpecial);

//Password generation conditions




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
