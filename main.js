/*
Project outline (Pseudocode)
  - Create intro message and store it in variable
  - Generate first vault code (10) as a variable, using addition
  - Generate second vault code (40) as a variable, using multiplication
  - Generate third vault code (39) as a variable, using remainder operator
  - Combine three numbers into one string separated by dashes, emulating a vault code
  - Display intro message and full vault combination on web page using an alert
*/

// intro message
const introMsg = "You have received this message because you have been chosen to open an important vault.. Here is the secret combination:";

// first code
let code0 = 4 + 6; // 10

// second code
const code1 = 4 * code0; // 40

// third code
const code2 = 79 % code1; // 39

// combine everything into one message
const fullMsg = `${introMsg} ${code0}-${code1}-${code2}`;

// display message
alert(fullMsg);


/* Stretch goals below */

// init variables
const codeDelimiter = '-';
let code = [code0, code1, code2];

// init webpage buttons
document.getElementById("newCode").onclick = promptValidCode;
document.getElementById("guessCode").onclick = promptCodeGuess;

// define functions below

function getCodeStr() {
  return code.join(codeDelimiter);
}

/* Prompt user for new code (in format), display outcomes and reassign code if successful */
function promptValidCode() {
  const maxTries = 3;
  let numArray = [];
  let promptStr = `Enter 3 numbers separated by "${codeDelimiter}":`;

  // re-prompt for invalid inputs, up to a limit
  for(let i = 0; i < maxTries; i++) {
    // get input
    numArray = promptCode(promptStr);

    // exit early if user pressed cancel
    if (numArray == null) return;

    // check input
    if (validateCode(numArray)) {
      // reassign code to new input
      code = numArray;
      alert(`New code has been set: ${getCodeStr()}`);
      // exit early on success
      return;
    }

    // try again
    promptStr = "invalid code format, try again";
  }

  alert(`You have failed to enter a valid code in ${maxTries} tries`);
}

/* Returns number array from prompted input following specific code format, using given "promptStr" as custom message */
function promptCode(promptStr) {
  // get input
  let promptReturn = prompt(promptStr);
  // account for "cancel"
  if (promptReturn == null) return null;

  const numArray = [];

  // parse string according to desired code format
  const strArray = promptReturn.split(codeDelimiter);
  // convert string input to numbers
  strArray.forEach(element => {
    let num = parseInt(element);
    numArray.push(num);
  });

  return numArray;
}

/* Returns true if the given "numArray" fulfills the format conditions for our code (a number array of size 3 w/ all valid numbers) */
function validateCode(numArray) {
  // check size
  if (numArray.length != 3) return false;
  
  // check each element
  for (let i = 0; i < numArray.length; i++) {
    let element = numArray[i];
    // for number type
    if (typeof element != "number") return false;
    // for valid number
    if (isNaN(element)) return false;
  }

  return true;
}

/* Returns true if the given "numArray" has the same size and elements as our "code" variable */
function checkCode(numArray) {
  // compare length
  if (numArray == null || numArray.length != code.length)
    return false;

  // compare each element
  for(let i = 0; i < code.length; i++) {
    if (numArray[i] != code[i])
      return false;
  }

  return true;
}

/* Prompt user to guess code (in format), compare it against current code, then display outcome */
function promptCodeGuess() {
  const guess = promptCode(`Guess the code! (hint: 3 numbers separated by "${codeDelimiter}")`);

  const outcomeStr = checkCode(guess) ? "correctly!" : "incorrectly (or in the wrong format)...";

  alert(`You've guessed ${outcomeStr}`);
}