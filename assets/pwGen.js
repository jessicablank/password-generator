// This is the refactored Javascript Code.
const generateBtn = document.querySelector("#generate");
let pwLength = 94;

// Write password to the #password input
writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Slider
const slider = document.getElementById("passwordLength");
const output = document.getElementById("passwordLengthView");
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  pwLength = this.value;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Set arrays for characters
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?/-=";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Receive User Inputs
const lowercaseInput = document.getElementById("lowerCase");
const uppercaseInput = document.getElementById("upperCase");
const numbersInput = document.getElementById("numbers");
const specialCharsInput = document.getElementById("specChars");


//Generate a Random Password!
function generatePassword(){
  randomPassword = "";
  passwordCharSet="";
  if(lowercaseInput.checked){
    passwordCharSet += lowerCase;
  }
  if (uppercaseInput.checked){
    passwordCharSet += upperCase;
  } 
  if (numbersInput.checked){
    passwordCharSet += numbers;
  }
  if (specialCharsInput.checked){
    passwordCharSet += specialChars;
  }

  for (let i=0; i < pwLength; i++){
    randomPassword += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
    );
  }

  return randomPassword;

}