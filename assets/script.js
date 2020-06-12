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




//declare variables 

var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;


  
  


//set arrays for other pw criteria
var charNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//function begins
function generatePassword() {
var confirmLenth = prompt("Enter the number of characters required between 8 and 128");



var confirmLower = confirm ("Do you want the password to contain lowercase letters?");
var confirmUpper = confirm("Do you want the password to contain UPPERCASE letters?");
var confirmNumeric = confirm("Do you want the password to contain numbers?");
var confirmSpecial = confirm("Do you want the password to contain special characters?");




var passwordCharacters = []

if (confirmLower) {
  passwordCharacters = passwordCharacters.concat(charLower)
}
      
if (confirmUpper) {
  passwordCharacters = passwordCharacters.concat(charUpper)
}

if (confirmSpecial) {
  passwordCharacters = passwordCharacters.concat(charSpecial)
}

if (confirmNumeric) {
  passwordCharacters = passwordCharacters.concat(charNumeric)
}

console.log(passwordCharacters)

//Password generation conditions
      
      var randomPassword = ""
      
      for (var i = 0; i < confirmLenth; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
     return randomPassword;

   }

    
