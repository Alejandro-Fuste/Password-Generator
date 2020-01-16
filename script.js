// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	// var password = generatePassword();
	password;
	var passwordText = document.querySelector('#password');

	passwordText.value = password;

	copyBtn.removeAttribute('disabled');
	copyBtn.focus();
}

function copyToClipboard() {
	// BONUS
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// BONUS EVENT LISTENER

//=========================================================

// Goal: Program that will generate a random password with the user being to choose whether a special character and number are included in the password.

// Characters for password

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var nums = '0123456789';
var spChar = ' !"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

//=========================================================
/* Variables for password, length, parsed length and random number. 
First prompt for length of password */

var len = prompt('How long do you want your password to be? Type in a number between 8 and 128.');

var parsedLen = parseInt(len);

/* Confirms to determine if uppercase letters, numbers, and special characters 
should be included in password. Variables storing responses for conditions */

var conditionUpper = confirm(
	'Should an uppercase letter be included in the password? Click "OK" for yes and "Cancel" for no.'
);

var conditionNums = confirm('Should a number be included in the password? Click "OK" for yes and "Cancel" for no.');

var conditionSpec = confirm(
	'Should a special character be included in the password? Click "OK" for yes and "Cancel" for no.'
);

/* Function that determines which character set to use based on answers
from promts and confirms */

var characterSet = function(condUpper, condNums, condSpec) {
	var lower = 'abcdefghijklmnopqrstuvwxyz';
	var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var nums = '0123456789';
	var spChar = ' !"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
	var charSet = '';

	if (condUpper && condNums && condSpec === true) {
		return (charSet = lower + upper + nums + spChar);
	} else if (condUpper === true && condNums === true && condSpec === false) {
		return lower + upper + nums;
	} else if (condUpper === true && condNums === false && condSpec === true) {
		return lower + upper + spChar;
	} else if (condUpper === true && condNums === false && condSpec === false) {
		return lower + upper;
	} else if (condUpper === false && condNums === true && condSpec === true) {
		return lower + nums + spChar;
	} else if (condUpper === false && condNums === true && condSpec === false) {
		return lower + nums;
	} else if (condUpper === false && condNums === false && condSpec === true) {
		return lower + spChar;
	} else {
		return lower;
	}
};

var set = characterSet(conditionUpper, conditionNums, conditionSpec);

//=========================================================
/* Function to generate password. */

var generatePassword = function(parLen, cset) {
	var p = '';
	var parsedLen = parseInt(parLen);

	for (i = 0; i < parsedLen; i++) {
		var randomNum = Math.floor(Math.random() * cset.length);
		p += set[randomNum];
	}
	return p;
};

var password = generatePassword(len, set);

//==============================================================
/* Function to generate random password without conditions,
   but with all characters (uppercase letters, lowercase letters,
   numbers, and special charachers). The length of the password 
   will be between 8 and 128 characters.  

var passGenerator = function () {
  var set = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var len = Math.floor(Math.random()*128)+8;
  var p = '';
    
  for (i = 0; i < len; i++) {
    var randomNum = Math.floor(Math.random()*set.length);
    p += set[randomNum];
  }
  return p
};

var password = passGenerator(); */
