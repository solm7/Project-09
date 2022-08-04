const fs = require('fs/promises');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: 'title', message: 'What is the title of your project?'},
    {type: 'input', name: 'description', message: 'What is a description of your project?'},
    {type: 'input', name: 'install', message: 'What are your installation instructions?'},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers)=>{
        console.log(answers)
        writeToFile("myReadme.md", generateMarkdown(answers) ) 
    })
}

// Function call to initialize app
init();
