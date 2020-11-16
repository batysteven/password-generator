// Assignment code here
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function randomPick() {
  var pick = Math.floor(Math.random() * 4);

  if (pick === 1 && true) {
    randomLowerCase();
  }
  if (pick === 2 && true) {
    randomUpperCase();
  }
  if (pick === 3 && true) {
    randomNumber();
  }
  if (pick === 4 && true) {
    randomSpecialChar();
  }
  if (false) {
     - 1;
  }
}

function randomLowerCase() {
  for (var i = 0; i < lowerCaseLetters.length; i++) {
    Math.floor(Math.random() * lowerCaseLetters.length);
  }
}

function randomUpperCase() {
  for (var j = 0; j < upperCaseLetter.length; j++) {
    Math.floor(Math.random() * upperCaseLetter.length);
  }
}

function randomNumber() {
  for (var k = 0; k < numbers.length; k++) {
    Math.floor(Math.random() * numbers.length);
  }
}

function randomSpecialChar() {
  for (var p = 0; p < specialChar.length; p++ ) {
    Math.floor(Math.random() * specialChar.length);
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
