//user imput values
var numOfChar;
var useNumber;
var useSpecial;
var useLowercase;
var useUppercase;
var userChoice;
var empty;
//arrays for character input
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];

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
		numbOfChar = parseInt(prompt('you must insert a value between 8-128'));

		//else statement that will use confirms to determine what characters the user chooses
	} else {
		useNumber = confirm('would you like your password to use numbers?');
		useSpecial = confirm('would you like your password to use special characters?');
		useLowercase = confirm('would you like your password to use lowercase letters?');
		useUppercase = confirm('would you like your password to use uppercase letters?');
	}

	//if statement that makes user pick a choice in characters and doesnt not allow no choice of characters
	if (!useNumber && !useLowercase && !useSpecial && !useUppercase) {
		userChoice = alert('you have to choose atleast one type of character to use!');
	}
	// First if statement that uses user input prompts to determine choices
	else if (useNumber && useSpecial && useLowercase && useUppercase) {

		userChoice = special.concat(number, uppercase, lowercase);
	}

	//else if statement that begins the parts of code that run if 3 types of characters are chosen
	else if (userSpecial && useNumber && useUppercase) {
		userChoice = special.concat(number, uppercase);
	} else if (userSpecial && useNumber && useLowercase) {
		userChoice = special.concat(number, lowercase);
	} else if (userSpecial && useLowercase && useUppercase) {
		userChoice = special.concat(lowercase, uppercase);
	} else if (userNumber && useLowercase && useUppercase) {
		userChoice = number.concat(lowercase, uppercase);
    }

    //else if statement that begins the parts of code that run if 2 types of characters are chosen
    else if (useSpecial && useNumber) {
        userChoice = special.concat(number);

    } else if (useSpecial && useLowercase) {
        userChoice = special.concat(lowercase);

    } else if (useSpecial && useUppercase) {
        userChoice = special.concat(uppercase);
    }
    else if (confirmLowercase && confirmNumber) {
        userChoice = lowercase.concat(number);

    } else if (useLowercase && useUppercase) {
        userChoice = lowercase.concat(uppercase);

    } else if (useNumber && useUppercase) {
        userChoice = number.concat(uppercase);
    }

    //else if statement that begins the parts of code that run if 1 types of characters are chosen
    else if (useSpecial) {
        userChoice = special;
    }
    else if (useNumber) {
        userChoice = number;
    }
    else if (useLowercase) {
        userChoice = lowercase;
    }
    // Created space variable to fill uppercase conversion
    else if (useUppercase) {
        userChoice = empty.concat(uppercase);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var userChoices = userChoice[Math.floor(Math.random() * userChoice.length)];
        password.push(userChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.querySelector("#password").textContent = ps;

}
