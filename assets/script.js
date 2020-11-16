// Assignment code here
//arrays for password
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

//randomly pick from options based on users response
function randomPick() {
  var pick = Math.floor(Math.random() * 4);

  if ((pick === 0) && (i === true)) {
    randomLowerCase();
  }
  if ((pick === 1) && (j === true)) {
    randomUpperCase();
  }
  if ((pick === 2) && (k === true)) {
    randomNumber();
  }
  if ((pick === 3) && (p === true)) {
    randomSpecialChar();
  }
  if ((i === false) || (j === false) || (k === false) || (p === false) && (q > 0)){
    q - 1;
  }
}

//randomly pick from array
function randomLowerCase() {
  for (var i = 0; i < lowerCaseLetters.length; i++) {
    Math.floor(Math.random() * lowerCaseLetters.length);
    localStorage.setItem("password", lowerCaseLetters[i]);
  }
}

function randomUpperCase() {
  for (var j = 0; j < upperCaseLetter.length; j++) {
    Math.floor(Math.random() * upperCaseLetter.length);
    localStorage.setItem("password", upperCaseLetter[j]);
  }
}

function randomNumber() {
  for (var k = 0; k < numbers.length; k++) {
    Math.floor(Math.random() * numbers.length);
    localStorage.setItem("password", numbers[k]);
  }
}

function randomSpecialChar() {
  for (var p = 0; p < specialChar.length; p++ ) {
    Math.floor(Math.random() * specialChar.length);
    localStorage.setItem("password", specialChar[p]);
  }
}

//ask questions about password and generate
function generatePassword() {
  var passwordLength = window.prompt(
    "How long would you like your password to be between 8 - 128 characters long??");

    var lowerCaseConfirm = window.confirm("Would you like lower case letters?");
    if (lowerCaseConfirm) {
      i = true;
    }
    else {
      i = false;
    }

    var upperCaseConfirm = window.confirm("Would you like upper case letters?");
    if (upperCaseConfirm) {
      j = true;
    }
    else {
      j = false;
    }

    var randomNumberConfirm = window.confirm("Would you like numbers?");
    if (randomNumberConfirm) {
      k = true;
    }
    else {
      k = false;
    }

    var randomSpecialConfirm = window.confirm("Would you like special characters?");
    if (randomSpecialConfirm) {
      p = true;
    }
    else {
      p = false;
    }

    if (8 < passwordLength < 128) {
      passwordLength = parseInt(passwordLength);

      for (var q = 0; q < passwordLength; q++) {
        randomPick();
      }
    }
    if (8 > passwordLength > 128) {
      window.alert("Not a valid option");
      generatePassword();
    }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
