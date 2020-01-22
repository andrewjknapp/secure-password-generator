# secure-password-generator

## Use
This secure password generator creates a password between 8 and 128 characters long and includes Digits, Lowercase Letters, Uppercase Letters, and Special Characters based on user input.

## Description of Functions

1. getCharacterSelection() 
    - Uses confirm() to prompt the user for their desired password characters
    - Validates that the user selected at least one character type
    - Returns an array containing all desired characters

2. generatePassword()
    - Uses prompt() to get User's desired password length
    - Validates that length is between 8 and 128, alerts and repeats if invalid
    - Calls on getCharacterSelection() for array of desired characters
    - Generates a password using user length and user desired character array
    - Uses regular expressions to validate that the password contains at least 
    one of each desired character type. If it does not then a new password is generated
    and checked again. Process repeats until a password meets criteria.

3. getRandom(arr)
    - Returns a random element of an array

4. writePassword() 
    - Calls generatePassword()
    - Writes the generated password to the textarea with id #password