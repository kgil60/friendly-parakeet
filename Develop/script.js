// Assignment code here
function promptLength() {
  // Asks user for length of password
  var passLength = window.prompt("How long would you like the password to be? Type a number between 8 and 128");

  // validates input
  if (parseInt(passLength)) {
    if (parseInt(passLength) >= 8 && parseInt(passLength) <= 128) {
      return parseInt(passLength);
    } else {
      window.alert("Please type a number between 8 and 128.");
      return false;
    }
  } else {
    window.alert("Please type a valid number.")
    return false;
  }   
}

function promptChar() {
  var validateArray = [];
  var passObj = {
    "lower": {
      "array": ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      "isTrue": false
    },
    "upper": {
      "array": ['A', 'B', 'C', 'D', 'E' ,'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S' ,'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      "isTrue": false
    },
    "number": {
      "array": ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      "isTrue": false
    },
    "special": {
      "array": ['!', '#', '$', '%', '&', '(', ')', '*', '+'],
      "isTrue": false
    }
  }

  // prompts user for lower case upper case numbers and special characters
  var promptLower = window.confirm("Include lower case letters?");
  if (promptLower) {
    passObj.lower.isTrue = true;
    validateArray.push('true');
  }

  var promptUpper = window.confirm("Include upper case letters?");
  if (promptUpper) {
    passObj.upper.isTrue = true;
    validateArray.push('true');
  }

  var promptNumber = window.confirm("Include numbers?");
  if (promptNumber) {
    passObj.number.isTrue = true;
    validateArray.push('true');
  }

  var promptSpecial = window.confirm("Include special characters?");
  if (promptSpecial) {
    passObj.special.isTrue = true;
    validateArray.push('true');
  }

  // validates if at least one character type was selected
  console.log(validateArray.length);
  if (validateArray.length > 0) {
    return passObj;
  } else {
    window.alert("Please choose at least one character type to include.");
    return false;
  }
}

function generatePassword() {
  var passArray = [];
  var passLength = promptLength();
  // forces passLength to be valid
  while (!passLength) {
    passLength = promptLength();
  }

  var passParams = promptChar();
  // forces passParams to be valid
  while (!passParams) {
    passParams = promptChar();
  }

  // generates each character and pushes to passArray
  while(passArray.length < passLength) {
    for (var char in passParams) {

      // checks if password is long enough yet before each loop
      if(passArray.length >= passLength) {
        break;
      }

      if(passParams[char].isTrue) {
        var randomNumber = Math.floor(Math.random() * passParams[char].array.length);

        // gets random character
        var character = passParams[char].array[randomNumber];

        passArray.push(character);
      }
    }
  }
  return passArray.join("");
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
