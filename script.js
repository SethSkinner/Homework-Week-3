//adding user input
let enter;
let confirmNumber;
let confirmSpecial;
let confirmUpper;
let confirmLower;
let confirmLength;

//functions to create password based on user input
special = function getSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

lower = function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

upper = function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

number = function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
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
