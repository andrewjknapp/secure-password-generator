//Array of digits
let digits = ['0','1','2','3','4','5','6','7','8','9'];

//Array of lowercase letters
let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Array of uppercase letters
let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//Array of special characters
let special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];



//Prompts user to determine which characters the user wants
//Returns an array with name of each character wanted
function getCharacterSelection() {

  let characterArray = [];
  let digitCheck = confirm("Include Numerical Digits in Secure Password?");
  let lowerCheck = confirm("Include Lowercase Letters in Secure Password?");
  let upperCheck = confirm("Include Uppercase Letters in Secure Password?");
  let specialCheck = confirm("Include Special Characters in Secure Password?");

  if (digitCheck) {
    characterArray.push(...digits);
  }

  if (lowerCheck) {
    characterArray.push(...lowercase);
  }

  if (upperCheck) {
    characterArray.push(...uppercase);
  }

  if (specialCheck) {
    characterArray.push(...special);
  }
  
  return characterArray;
}

//Generates secure password when called
function generatePassword() {

  let passLength = parseInt(prompt("Please enter the length of desired password as an integer from 8 to 128"));
  
  let charSelect = getCharacterSelection();
  let password = "";

  for (let i=0; i<passLength; i++) {
    password += getRandom(charSelect);
  }
  return password;
}

//Returns value of random index of an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

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
