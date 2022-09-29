// TODO: Include packages needed for this application. npm i

const inquirer =  require('inquirer');

const fs = require('fs');

const path = require('path');

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the name of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Give a brief description of your project"
    },
    {
        type:"input",
        name:"installation",
        message:"How does the user install this project?"
    },
    {
        type:"input",
        name:"usage",
        message:"How does the user use this project?"
    },
    {
        type:"list",
        name:"license",
        message:"What license does this project have?",
        choices:[
            "MIT","Apache2.0","GPL3.0","BSD-3","None"
        ]
    },
    {
        type:"input",
        name:"contribute",
        message:"Who else has contributed to this project?"

    },
    {
        type:"input",
        name:"test",
        message:"What command should be used to run tests?"
    },
    {
        type:"input",
        name:"github",
        message:"What is your github username?"
    },
    {
        type:"input",
        name:"email",
        message:"What is your email?"
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),"/dist",fileName),data);

    
}
    
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        writeToFile("README.md",generateMarkdown(answers));
        console.log("We did Itttttt!!!!!!!!!!!")
    });
}

// Function call to initialize app
init();
