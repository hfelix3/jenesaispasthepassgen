// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to will now call generate password
function writePassword() {
  //then it gows to line 14
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//#4 then we select promted vars
function generatePassword() {
  var passwordlength = prompt("type a number length of at least 8 characters and no more than 128 characters using numbers");
  var lowercaseprompt = confirm("confirm whether or not to include lowercase");
  var uppercaseprompt = confirm("confirm whether or not to include uppercase");
  var numericprompt = confirm("confirm whether or not to include numeric");
  var specialcahracterprompt = confirm("confirm whether or not to include special characters");

  //#5checking for password length
  if (parseInt(passwordlength) < 8 || parseInt(passwordlength) > 128) {
   //#6 if not the correct lenght then it will go back to genpass function again
    prompt("enter password between 8 to 128 characters")
    generatePassword()
  } else {
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    var symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '`', '-', '=', '[', ']', '{', '}', ';', ':', '"', '<', '>', '?', ',', '.', '/'];

    let userchoicearray = []
//#7 adding values in []
    if (lowercaseprompt) {
      userchoicearray = userchoicearray.concat(lowercase)
    }

    if (uppercaseprompt) {
      userchoicearray = userchoicearray.concat(uppercase)
    }
    if (numericprompt) {
      userchoicearray = userchoicearray.concat(numbers)
    }
    if (specialcahracterprompt) {
      userchoicearray = userchoicearray.concat(symbols)
    }

    let passwordstring = ""
    console.log(userchoicearray)
    for (var i = 0; i < passwordlength; i++) {
      var random = userchoicearray[Math.floor(Math.random() * userchoicearray.length)];
      passwordstring = passwordstring + random
    }

    return passwordstring

  }

};

// Add event listener click to generate button then call writepassword function
generateBtn.addEventListener("click", writePassword);
