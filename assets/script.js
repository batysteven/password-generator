// Assignment code here
//arrays for password
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

passwordLength = 0;

//set var genPassword to collect random generated items in array for password
var genPassword = "";
//only pulls value from textarea and not the whole object
genPassword.value = password;

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
  if (((pick === 0) && (i === false)) || ((pick === 1) && (j === false)) || ((pick === 2) && (k === false)) || ((pick === 3) && (p === false))) {
    randomPick();
  }
}

//randomly pick from array store in localStorage
function randomLowerCase() {
  const i = Math.floor(Math.random() * lowerCaseLetters.length);
  genPassword = genPassword + lowerCaseLetters[i];
  //localStorage.setItem("password", (i, lowerCaseLetters[i]));
}

function randomUpperCase() {
  const j = Math.floor(Math.random() * upperCaseLetter.length);
  genPassword = genPassword + upperCaseLetter[j];
  //localStorage.setItem("password", (j, upperCaseLetter[j]));
}

function randomNumber() {
  const k = Math.floor(Math.random() * numbers.length);
  genPassword = genPassword + numbers[k];
  //localStorage.setItem("password", (k, numbers[k]));
}

function randomSpecialChar() {
  const p = Math.floor(Math.random() * specialChar.length)
  genPassword = genPassword + specialChar[p];
  //localStorage.setItem("password", (p, specialChar[p]));
}

//ask questions about password and generate
function generatePassword() {
  passwordLength = window.prompt(
    "How long would you like your password to be between 8 - 128 characters long??");

  //check valid input
  if ((passwordLength === "") || (passwordLength === null)) {
    window.alert("Not a valid option");
    generatePassword();
  } 

  //check valid input number between 8-128 and not text or special characters
  if (isNaN(passwordLength) || passwordLength < 7 || passwordLength > 128) {
    window.alert("Not a valid option");
    generatePassword();
  }

  else {
    
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

    //loop to generate password
    for (var q = 0; q < passwordLength; q++) {
      randomPick();
    }
  }
  return genPassword;
}

function clearPassword() {
  genPassword = "";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  clearPassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
