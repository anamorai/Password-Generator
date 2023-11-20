// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Need a way to check if a number was entered
// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to be? Please enter a number between 8 - 128."));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 - 128")
    return getPasswordOptions();
  }
  if (isNaN(passwordLength)) {
    alert('Please enter a NUMBER between 8 - 128')
    return getPasswordOptions();
  }

  var lowercase = confirm("Would you like lowercase characters in your password? Click 'Ok' for yes or 'Cancel' for no.")
  var uppercase = confirm("Would you like uppercase characters in your password? Click 'Ok' for yes or 'Cancel' for no.")
  var numeric = confirm("Would you like numberic characters in your password? Click 'Ok' for yes or 'Cancel' for no.")
  var special = confirm("Would you like special characters in your password? Click 'Ok' for yes or 'Cancel' for no.")
  if (!lowercase && !uppercase && !numeric && !special) {alert('Please choose at least one character type')
  return getPasswordOptions();
}

var userOptions = {
  lowercase:lowercase,
  uppercase:uppercase,
  numeric:numeric,
  special:special,
};
console.log(userOptions)
return userOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
var options = getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


