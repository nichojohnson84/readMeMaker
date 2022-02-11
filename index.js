// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([

        {
            type: "input",
            message: "What is your GitHub username?",
            name: "Username"
        },
        {
            type: "input",
            message: "What is the name of your project?",
            name: "ProjectTitle"
        },
        //I would like to add a table of contents.
        {
            type: "input",
            message: "Why did you build this? (Hint: Because I was asked and homewwork are not good answers)",
            name: "Reason"
        },
        {
            type: "input",
            message: "Why would someone want to use this?",
            name: "Function"
        },
        //needs header Installation
        {
            type: "input",
            message: "How does I install and use it?",
            name: "Installation"
        },
        //needs header Credtis
        {
            type: "input",
            message: "What languages or programs did you use?",
            name: "Language"
        },
        {
            type: "input",
            message: "Who contributed to your project if anyone?",
            name: "Contributor"
        },
        {
            type: "input",
            message: "Recommendations or Bug fixes",
            name: "Feedback"
        },
        // header for tests  "optional if I think I can pull it off in time"
        {
            type: "input",
            message: "How can I test the program?",
            name: "Test"
        },
        // header for feedback
        {
            type: "input",
            message: "Would you like to give feedback?",
            name: "Feedback"
        },
        //Summary and future plans for development.
        {
            type: "input",
            message: "What did you learn building this application?",
            name: "Plan"
        },
        {
            type: "input",
            message: "Are you already thinking for future plans or add ons?",
            name: "Plan"
        },
        //needs header for license
        {
            type: "input",
            message: "Do you have a license added?",
            name: "License"
        },
    ]);



// TODO: Create an array of questions for user input (this was previously above the questions)
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
