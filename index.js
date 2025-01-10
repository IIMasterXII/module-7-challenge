// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs'

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (input) => input ? true : 'Cannot be empty.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is your Installation Instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your Usage Information?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are your Contributing Guidelines?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are your Test Instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a License.',
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?',
        validate: (input) => input ? true : 'Cannot be empty.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (input) => input ? true : 'Cannot be empty.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err =>{
        err ? console.log(err) : console.log("Successfully created README file.")
    }))
}

const generateREADME = ({title, description, installation, usage, contribute, test, license, username, email}) => 
    `# ${title}

${license === 'MIT' ? '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)' : ''}
${license === 'Apache' ? '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)' : ''}
${license === 'GPL' ? '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)' : ''}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${contribute}

## Tests

${test}

## Questions

https://github.com/${username}
    
Please contact ${email} for additional questions.`;

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        const generatedREADME = generateREADME(answers);
        writeToFile('README.md', generatedREADME);
    })
}

// Function call to initialize app
init();
