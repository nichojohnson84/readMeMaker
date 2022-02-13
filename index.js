// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
function promptUser() {
  return inquirer
    .prompt([
      {
        type: "input",
        message:
          "What is your GitHub username? This will be displayed at the bottom so peopel can view your repo and reach out.",
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
        name: "usage",
      },
      //needs header Installation
      {
        type: "input",
        message: "How do I install and use it?",
        name: "installation",
      },
      //needs header Credtis
      {
        type: "input",
        message: "What languages or programs did you use?",
        name: "language",
        message: "What programs or languages did you use for this project?",
      },
      {
        type: "input",
        message: "Who contributed to your project if anyone?",
        name: "contributor",
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
      //for most projects a link will be required here.
      {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project. (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need to enter a project GitHub link!");
            return false;
          }
        },
      },
      //needs header for license
      {
        type: "input",
        message:
          "Who has provided the license for this project? Please choose one and if selecting other, please add it to your README manually afterward.(If you need help GitHub pretty much does the work for you and you just choose one that you feel fits",
        name: "license",
      },
    ])
    .then((answers) => {
      const readText = generateMarkdown(answers);
      writeToFile("dist/README.md", readText);
    })
    .catch((err) => {
      console.log(err);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Function call to initialize app
promptUser();
