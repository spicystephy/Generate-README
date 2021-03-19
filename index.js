// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username, do not include @?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a description for your project.",
      name: "description",
    },
    {
      type: "checkbox",
      message: "Select one or more titles to build your table of contents.",
      name: "tableOfContents",
      choices: [
        "Description",
        "Table of Contents",
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Test Instructions",
        "Questions",
      ],
    },
    {
      type: "input",
      message: "What are the instructions for installation?",
      name: "installation",
    },
    {
      type: "input",
      message: "What information is needed for using this?",
      name: "usage",
    },
    {
      type: "list",
      message: "Pick a license for your application.",
      name: "license",
      choices: ["MIT", "Apache_2", "GNU_GPLv3", "BSD_3", "None"],
    },
    {
      type: "input",
      message: "What are the guidelines for contributing to your project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Write instructions for how to perform a test.",
      name: "testInstructions",
    },
    {
      type: "input",
      message: "If you have any questions, please contact...",
      name: "questions",
    },
  ])

  .then((data) => {
    console.log(data);
    //store name of file in const
    const filename = "README.md";
    //save information to the file
    fs.writeFile(filename, generateMarkdown(data),
      (err) => (err ? console.log(err) : console.log("Your README file has been created!"))
    );
  });

// Function call to initialize app
// init();
