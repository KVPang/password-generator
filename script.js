// Assign variables
// password length selections
// multiple arrays: lowercase array, uppercase array, numbers array, special characters array
// empty array for storing password 
// prompts and storing responses:
//How long is the password?
//any lowercase?
//any uppercase?
//any numbers?
//special characters?
//generating and returning a password 
//if statements


function generatePassword() {
  var pwChar = window.prompt("How many characters would you like your password to be?")
  if (pwChar <= 7 || pwChar > 129) {
    window.alert("Password must be more than 8 characters and less than 128 characters")
    return "ERROR"
  }
  var pwUpper = window.confirm("Any uppercase letters?")
  var pwLower = window.confirm("Any lower case letters?")
  var specChar = window.confirm("Any special characters?")
  var num = window.confirm("Any numbers?")

  const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    specChar: "!@#$%^&*"
  }

  var password = "";
  var possible = ""
  if (!pwUpper && !pwLower && !specChar && !num) {
    window.alert("You must click OK to at least one question")
    return "ERROR"

  }
  if (pwUpper === true) {
    possible = possible + keys.upperCase
  }

  if (pwLower === true) {
    possible = possible + keys.lowerCase
  }

  if (specChar === true) {
    possible = possible + keys.specChar
  }

  if (num === true) {
    possible = possible + keys.number
  }

  for (var i = 0; i < pwChar; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return password;
}

//
// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);