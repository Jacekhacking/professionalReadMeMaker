// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project\'s name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none']
    },

    //Find better type for dependencies and tests. In the demo they had a default answer.
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
        //default answer should be npm i 
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?'
        //default answer should be npm test
    },
    {
        type: 'input',
        name: 'info',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filename = 'READEME.md'
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
