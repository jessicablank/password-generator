
const generateBtn = document.querySelector("#generate");

//Default slider length
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
const upperCase = lowerCase.toUpperCase();

//Receive User Inputs
const lowercaseInput = document.getElementById("lowerCase");
const uppercaseInput = document.getElementById("upperCase");
const numbersInput = document.getElementById("numbers");
const specialCharsInput = document.getElementById("specChars");


//Generate a Random Password!
function generatePassword(){
  //Set password output to a string
  randomPassword = "";
  //Build a new array with user selections for characters from checkboxes
  passwordCharSet=[];

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

  //Set the password length to user specifications
  for (let i=1; i <= pwLength; i++){
    //Build password string by randomly selecting characters from the character array 
    let pwCharacters = Math.floor(Math.random() * passwordCharSet.length)
    randomPassword += passwordCharSet.charAt(pwCharacters)
    
  }

  return randomPassword;

}

//Function that disables the last checkbox from being unchecked so there is always at least one parameter set. 
function disableOnlyCheckbox(){
	let totalChecked = [lowercaseInput, uppercaseInput, numbersInput, specialCharsInput].filter(el => el.checked)
	totalChecked.forEach(el => {
		if(totalChecked.length == 1){
			el.disabled = true;
		}else{
			el.disabled = false;
		}
	})
}

[lowercaseInput, uppercaseInput, numbersInput, specialCharsInput].forEach(el => {
	el.addEventListener('click', () => {
		disableOnlyCheckbox()
	})
})
