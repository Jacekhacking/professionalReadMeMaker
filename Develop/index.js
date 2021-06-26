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
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     const fileName = 'README.md';

//     fs.writeFile(fileName, contents, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('Success! Your README has been created!');
//     });
// };

// TODO: Create a function to initialize app
function init() {
    console.log("\r\r");

    inquirer.prompt(questions).then(function (data) {
        console.log(data);


        data.githubUsername;
        data.email;

        const filename = 'readme.md';

        var contents = 'This is a readme... \r\n'
            + 'This should output npm test : ' + data.tests + '\r\n'
            + 'there should be a line break here and this should also output my username : ' + data.githubUsername + '\r\n '
            + '#' + data.projectName + '\r\n'


            + '## Description\r\n'
            + data.description + '\r\n'

            + '\r\n'
            + '## Table of Contents\r\n'
            + '\r\n'
            + '* [Installation](#installation)\r\n'
            + '* [Usage](#usage)\r\n'
            + '* [Credits](#credits)\r\n'
            * +' [License](#license)\r\n'


            + '## Installation\r\n'

            + 'Requires node inquirer package.\r\n'

            + '## Usage\r\n'

            + 'Load up terminal inside of the index.js file. prompt with "node index.js" and follow the prompts. README file will be created following completion. '

            + '## Credits'


            + '## License'

            + 'The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)'


            + '---'

        🏆 +'The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document.You might also want to consider adding the following sections.'
            
            ## Badges

        ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

            Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing.Check out the badges hosted by[shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.






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
