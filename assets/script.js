// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Declare variables for user input

var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;


//Set arrays for results of user input 
var charNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Generate Password Function begins with user setting length parameter
function generatePassword() {
var confirmLength = prompt("Enter a number between 8 and 128 to set the password length.");
confirmLength = parseInt(confirmLength);

//Check to make sure user enter a number between 8 and 128. If not, ask user to try again. 
if (!isNaN(confirmLength)&& confirmLength > 8 && confirmLength < 128) {
  alert ("Your password will contain " + confirmLength + " characters");
} else {
  alert("Please enter a number between 8 - 128 to set password length.");
  var confirmLength = prompt("Enter a number between 8 and 128 to set the password length.");
}
 

//Once password length is determined, other parameters can be established. 
var confirmLower = confirm ("Do you want the password to contain lowercase letters?\n Click OK for yes or Cancel for no.");
var confirmUpper = confirm("Do you want the password to contain UPPERCASE letters?\n Click OK for yes or Cancel for no.");
var confirmNumeric = confirm("Do you want the password to contain numbers?\n Click OK for yes or Cancel for no.");
var confirmSpecial = confirm("Do you want the password to contain special characters?\n Click OK for yes or Cancel for no.");

//While loop if user does not confirm any parameters
while (confirmLower === false && confirmUpper === false && confirmNumeric === false && confirmSpecial === false){
  alert("ALERT! You must select at least one character type! Please try again.");
  var confirmLower = confirm ("Do you want the password to contain lowercase letters?\n Click OK for yes or Cancel for no.");
  var confirmUpper = confirm("Do you want the password to contain UPPERCASE letters?\n Click OK for yes or Cancel for no.");
  var confirmNumeric = confirm("Do you want the password to contain numbers?\n Click OK for yes or Cancel for no.");
  var confirmSpecial = confirm("Do you want the password to contain special characters? \n Click OK for yes or Cancel for no.");

}

//Set a variable to put together the password from the arrays and the user inputs
var passwordChar = []

if (confirmLower) {
  passwordChar = passwordChar.concat(charLower)
}
      
if (confirmUpper) {
  passwordChar = passwordChar.concat(charUpper)
}

if (confirmSpecial) {
  passwordChar = passwordChar.concat(charSpecial)
}

if (confirmNumeric) {
  passwordChar = passwordChar.concat(charNumeric)
}

console.log(passwordChar)

//Password generation conditions
      
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
        console.log(randomPassword)
      }
     return randomPassword;

   }

    
