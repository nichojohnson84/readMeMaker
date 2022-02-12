// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown=require("./utils/generateMarkdown")



// TODO: Create an array of questions for user input
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please describe your project.",
      name: "describe",
    },
    //I would like to add a table of contents.
    {
      type: "input",
      message:
        "Why did you build this? (Hint: Because I was asked and homewwork are not good answers)",
      name: "reason",
    },
    {
      type: "input",
      message: "Why would someone want to use this?",
      name: "function",
    },
    //needs header Installation
    {
      type: "input",
      message: "How does I install and use it?",
      name: "installation",
    },
    //needs header Credtis
    {
      type: "input",
      message: "What languages or programs did you use?",
      name: "language",
    },
    {
      type: "input",
      message: "Who contributed to your project if anyone?",
      name: "contributor",
    },
    {
      type: "input",
      message: "Recommendations or Bug fixes",
      name: "bugs",
    },
    // header for tests  "optional if I think I can pull it off in time"
    {
      type: "input",
      message: "How can I test the program?",
      name: "test",
    },
    // header for feedback
    {
      type: "input",
      message: "Would you like to give feedback?",
      name: "feedback",
    },
    //Summary and future plans for development.
    {
      type: "input",
      message: "What did you learn building this application?",
      name: "learned",
    },
    {
      type: "input",
      message: "Are you already thinking for future plans or add ons?",
      name: "plan",
    },
    //needs header for license
    {
      type: "input",
      message: "Do you have a license added?",
      name: "license",
    },
  ]).then((answers)=>{
      const readText=generateMarkdown(answers)
      writeToFile("dist/README.md",readText)
  })
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}


// Function call to initialize app
promptUser();
