/*
Project outline (Pseudocode)
  - Create into message and store it in variable
  - Generate first vault code (10) as a variable, using addition
  - Generate second vault code (40) as a variable, using multiplication
  - Generate third vault code (39) as a variable, using remainder operator
  - Combine three numbers into one string separated by dashes, emulating a vault code
  - Display intro message and full vault combination on web page using an alert
*/

// intro message
const intoMsg = "You have received this message because you have been chosen to open an important vault.. Here is the secret combination:";

// first code
const code0 = 4 + 6; // 10

// second code
const code1 = 4 * code0; // 40

// third code
const code2 = 79 % code1; // 39

// combine everything into one message
const fullMsg = `${introMsg} ${code0} - ${code1} - ${code2}`;

// display message
alert(fullMsg);