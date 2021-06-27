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
        name: 'instillation',
        message: 'What needs to be installed in order to use this app?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Any notable contributions you would like to mention?'
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
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'info',
        message: 'What does the user need to know about using the repo? *test and dependencies will be automatically generated after your input*'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

// TODO: Create a function to initialize app
function init() {
    console.log("\r\r");

    inquirer.prompt(questions).then(function (data) {
        console.log(data);


        data.githubUsername;
        data.email;

        const filename = 'readme.md';

        const contents = `
# ${data.projectName}


## Description
${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.instillation}

## Usage

${data.info}
dependencies: ${data.dependencies}
command to run tests: ${data.tests}


## Contributing

${data.contributing}

## Credits

${data.credits}

## License

${data.license}


---

## Badges
`


        fs.writeFile(filename, contents, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log('Success!');
        });
    });
};

// Function call to initialize app
init();
