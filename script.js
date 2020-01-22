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
//Returns an array with an array of characters desired
function getCharacterSelection() {

  
  let allCharacterArray = [];

  let digitCheck;
  let lowerCheck;
  let upperCheck;
  let specialCheck;

  do {

    //Promp user for desired characters
    digitCheck = confirm("Include Numerical Digits in Secure Password?");
    lowerCheck = confirm("Include Lowercase Letters in Secure Password?");
    upperCheck = confirm("Include Uppercase Letters in Secure Password?");
    specialCheck = confirm("Include Special Characters in Secure Password?");

    //Compiles array of desired characters
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

    //Alert displayed if no character types are chosen. If this is the 
    //case then loop will be repeated
    if (allCharacterArray.length < 1) {
      alert("At least one character type must be chosen");
    }

  } while(allCharacterArray.length < 1) 
  
  return allCharacterArray;
}

//Generates secure password when called
function generatePassword() {

  let passLength;
  let lengthCheck;

  //Prompts for desired length and validates input to be an integer between 8 & 128
  do {
    passLength = parseInt(prompt("Please enter the length of desired password as an integer from 8 to 128"));
    lengthCheck = passLength > 7 && passLength < 129;

    if (!lengthCheck) {
      alert("Invalid length");
    }

  } while(!lengthCheck);
  

  //Creates desired character array
  let charSelect = getCharacterSelection();
  let password = "";

  //Will be used to validate that generated password contains at least one of each specified characters
  let digitBool;
  let lowerBool;
  let upperBool;
  let specialBool;

  do {

    digitBool = true;
    lowerBool = true;
    upperBool = true;
    specialBool = true;

    //Gets random characters from desired character array. Gives the number of characters
    //equal to the requested length
    for (let i=0; i<passLength; i++) {
      password += getRandom(charSelect);
    }
    
    //Uses Regular Expressions to determine that the password contains at least one 
    //of each desired character. This checks to see if a certain character is in the 
    //desired character array and if so will check that the password contains at least 
    //one character of that character type (digit, lower, upper, special)
    if (charSelect.indexOf('0') !== -1) {
      digitBool = digitRegex.test(password);
    }
    if (charSelect.indexOf('a') !== -1) {
      lowerBool = lowerRegex.test(password);
    }
    if (charSelect.indexOf('A') !== -1) {
      upperBool = upperRegex.test(password);
    }
    if (charSelect.indexOf('!') !== -1) {
      specialBool = specialRegex.test(password);
    }
    
    //If the generated password does not contain at least one of each desired character 
    //type the loop will repeat until it meets these criteria.
  } while(
    !(digitBool &&
    lowerBool &&
    upperBool &&
    specialBool)
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
