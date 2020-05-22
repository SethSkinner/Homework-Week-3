//user imput values
var numOfChar;
var useNumber;
var useSpecial;
var useLowercase;
var useUppercase;
var userChoice;
//arrays for character input
special =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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

//function that takes the string and turns it into an integer for the number of characters
function generatePassword() {
  numOfChar = parseInt(prompt('choose length of your password! 8-128'));
  
  //an if statement that makes sure there has been a value input
  if (!numOfChar) {
    alert('you must insert a value between 8-128');

   //else if statement that makes sure the value input was between 8-128
  } else if (numbOfChar <= 8 || numbOfChar >= 128) {

    //asking for user input and turning input into integer once more    
    numbOfChar = parseInt(prompt ('you must insert a value between 8-128'));
  
  //else statement that will use confirms to determine what characters the user chooses
  } else {
      useNumber = confirm('would you like your password to use numbers?');
      useSpecial = confirm('would you like your password to use special characters?');
      useLowercase = confirm('would you like your password to use lowercase letters?');
      useUppercase = confirm('would you like your password to use uppercase letters?');
  };

  //if statement that makes user pick a choice in characters and doesnt not allow no choice of characters
  if (!useNumber && !useLowercase && !useSpecial && !useUppercase) {
      userChoice = alert('you have to choose atleast one type of character to use!');
  }

  //

}