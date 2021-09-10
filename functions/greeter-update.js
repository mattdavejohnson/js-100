// Add a function to greeter.js that solicits the user's first and last
// names in seperate invocations then greet the user

let rlSync = require('readline-sync');

function askName(text) {
  let name = rlSync.question(text);
  return name;
}

let firstName = askName('What is your first name? ');
let lastName = askName('What is your last name? ');

console.log(`Greetings, ${firstName} ${lastName}!`);