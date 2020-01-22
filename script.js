//Array of digits
let digits = ['0','1','2','3','4','5','6','7','8','9'];
let digitRegex = /[0-9]/;

//Array of lowercase letters
let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let lowerRegex = /[a-z]/;

//Array of uppercase letters
let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let upperRegex = /[A-Z]/;

//Array of special characters
let special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
let specialRegex = /[!"#$%&()*+,-./:;<=>?@[\\\]\^_`{\|}~]/;


//Prompts user to determine which characters the user wants
//Returns an array with an array of characters wanted and
// an array of all characters to choose from.
function getCharacterSelection() {

  
  let allCharacterArray = [];
  let digitCheck = confirm("Include Numerical Digits in Secure Password?");
  let lowerCheck = confirm("Include Lowercase Letters in Secure Password?");
  let upperCheck = confirm("Include Uppercase Letters in Secure Password?");
  let specialCheck = confirm("Include Special Characters in Secure Password?");

  if (digitCheck) {
    allCharacterArray.push(...digits);
  }

  if (lowerCheck) {
    allCharacterArray.push(...lowercase);
  }

  if (upperCheck) {
    allCharacterArray.push(...uppercase);
  }

  if (specialCheck) {
    allCharacterArray.push(...special);
  }
  
  return allCharacterArray;
}

//Generates secure password when called
function generatePassword() {

  let passLength;
  let lengthCheck;

  do {
    passLength = parseInt(prompt("Please enter the length of desired password as an integer from 8 to 128"));
    lengthCheck = passLength > 7 && passLength < 129;

    if (!lengthCheck) {
      alert("Invalid length");
    }

  } while(!lengthCheck);
  


  let charSelect = getCharacterSelection();
  let password = "";

  do {

    for (let i=0; i<passLength; i++) {
      password += getRandom(charSelect);
    }
    
    
  } while(
    !(digitRegex.test(password) &&
    lowerRegex.test(password) &&
    upperRegex.test(password) &&
    specialRegex.test(password))
  )
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
