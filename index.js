const fs = require('fs/promises');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: 'title', message: 'What is the title of your project?'},
    {type: 'input', name: 'description', message: 'What is a description of your project?'},
    {type: 'input', name: 'Instructions', message: 'What are the installation instructions?'},
    {type: 'input', name: 'Problem', message: 'What problem does your project attempt to solve?'},
    {type: 'input', name: 'Inspiration', message: 'Why did you create this project?'},
    {type: 'input', name: 'TakeAways', message: 'What did you learn from doing this project?'},
    {type: 'input', name: 'Contributions', message: 'Who contributed to this project?'},
    {type: 'input', name: 'Usage', message: 'How should this project be used?'},
    {type: 'input', name: 'Inquiries', message: 'How can you be reached?'},
    {type: 'list', name: 'Liscense', message: 'What licenses were used?', choices:["No license", "IBM Public License Version 1.0", "The Do What the Fuck You Want to Public License", "The Hippocratic License 2.1"] },
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
