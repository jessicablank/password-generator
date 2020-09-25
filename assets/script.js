// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Declare variables for user input

let confirmLength;
let confirmLower;
let confirmUpper;
let confirmNumeric;
let confirmSpecial;


//Set arrays for results of user input 
const charNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charSpecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
const charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Generate Password Function begins with user setting length parameter
generatePassword = () => {


  //Check to make sure user enter a number between 8 and 128. If not, ask user to try again. 
  let confirmLength;
  // recursion
  promptLengthCheck = () => {
    confirmLength = prompt("Enter a number between 8 and 128 to set the password length.");
    confirmLength = parseInt(confirmLength);
    if (!isNaN(confirmLength) && confirmLength > 7 && confirmLength < 129) {
      console.log("Your password will contain " + confirmLength + " characters");
    } else {
      alert("Please enter a number between 8 and 128. Try again!")
      promptLengthCheck();
    }
  }
  promptLengthCheck();

  let confirmLower;
  let confirmUpper;
  let confirmNumeric;
  let confirmSpecial;

  //Once password length is determined, other parameters can be established. 
  promptCharactersCheck = () => {
    confirmLower = confirm("Do you want the password to contain lowercase letters?\n Click OK for yes or Cancel for no.");
    confirmUpper = confirm("Do you want the password to contain UPPERCASE letters?\n Click OK for yes or Cancel for no.");
    confirmNumeric = confirm("Do you want the password to contain numbers?\n Click OK for yes or Cancel for no.");
    confirmSpecial = confirm("Do you want the password to contain special characters?\n Click OK for yes or Cancel for no.");
    if (confirmLower === true && confirmUpper === true && confirmNumeric === true && confirmSpecial === true) {
      console.log(confirmLower);
      console.log(confirmUpper);
      console.log(confirmNumeric);
      console.log(confirmSpecial);
    } else {
      alert("At least one parameter must be confirmed. Try again!")
      promptCharactersCheck();
    }
  }

  promptCharactersCheck();


  //Set a variable to put together the password from the arrays and the user inputs
  let passwordChar = []

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

  let randomPassword = ""

  for (let i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

