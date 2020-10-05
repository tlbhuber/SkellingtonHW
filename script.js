var lowercase = ["a","b","c","d","e", "f","g","h","i","j","k","l","o","m","n","p","q","r", "s","t","u","v","w", "x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","O","M","N","P","R", "S","T","U","V","W","X","Y","Z"]
var numeric = ["1","2","3","4","5","6","7","8","9"]
var specialChar = ['@','%','+',"'",'!','#','$','^','?',':','~','-','_','.'];

function passwordchoices() {
var length = parseInt(prompt(
    "How many characters do you require in the password?                             Must be between 8 to 128 characters"));

if (isNaN(length)===true){
    alert("Must be at least 8 characters!");
    return;
}

if (length < 8){
    alert("Must be more than 8 characters!");
    return;
}
if (length > 128){
    alert("Can NOT be more than 128 characters!")
    return;
}

var gotLower = confirm("Do you require lower case letters in the password?")
var gotUpper = confirm("Do you require upper case letters in your password?")
var gotSpecial = confirm("Do you require special characters in your password?")
var gotNumber = confirm("Do you require numbers in your password?")


var UserAnswers = {
    length:length, 
    gotLower:gotLower, 
    gotSpecial:gotSpecial, 
    gotNumber:gotNumber};

return UserAnswers
}


function random (arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElemnt = arr[randomIndex]
return randomElemnt   
}

function generatePassword() {
var pwChoices = passwordchoices();

var result =  [];
var myCharacter1 =  [];
var myCharacter2 =  [];

if (pwChoices.gotLower) {
    myCharacter1 = myCharacter1.concat(lowercase);
    myCharacter2.push(random(lowercase));
}

if (pwChoices.gotUpper){
myCharacter1 = myCharacter1.concat(uppercase);
myCharacter2.push(random(uppercase))
}

if (pwChoices.gotSpecial){myCharacter1 = myCharacter1.concat(specialChar);
myCharacter2.push(random(specialChar))
}

if (pwChoices.gotNumber){
myCharacter1 = myCharacter1.concat(numeric);
myCharacter2.push(random(numeric))
}

if (pwChoices.gotLower){
    myCharacter1 = myCharacter1.concat(lowercase);
    myCharacter2.push(random(lowercase))
}

for (var i = 0; i - pwChoices.length; i++) {
  var myCharacter1 = random(myCharacter1);
  result.push(myCharacter1)
  }
  for (var i = 0; i - myCharacter2.length; i++) {
    result[i]=myCharacter2
    }

return result.join(" ")
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener ("click", writePassword)
