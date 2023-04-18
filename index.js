// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'colors',
        message: 'What is your favorite color?',
    },
    {
        type: 'input',
        name: 'names',
        message: 'What is your name?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 


fs.writeFile(fileName, data, err => {
  if (err) {
    console.error(err);
  }
  console.log("slay house")
  // file written successfully
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt( questions
            /* Pass your questions in here */
        )
        .then((answers) => {
            //console.log(answers);
            //console.log("Your favorite color is " + answers.colors);
            var content = `${answers.names}'s favorite color is ${answers.colors}`;
            writeToFile("tutor.txt", content);
            // Use user feedback for... whatever!!
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init(); {
    fs.appendFile('tutor.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      }

}
