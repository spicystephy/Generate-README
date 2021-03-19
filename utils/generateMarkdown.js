// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const badges = {
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    Apache_2: "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    GNU_GPLv3: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    BSD_3: "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)",
  };
     return badges[license]

};
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "none")
    return `*[License](#license)`
    else{
      return;
    }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License
{renderLicenseBadge(data.license)}
    
## Description
${data.description}
    
## Table Of Contents
${data.tableOfContents}
    
## Installation
${data.installation}
 * [Installation](#installation)

 * [Usage](usage)

 * [Contributing](contributing)

 * [Test Instructions](testInstructions)

 * [Questions](questions)
    
## Usage
${data.usage}
[Instructional Video](https://youtu.be/gq2BujzylVY)
    
## Contributing
${data.contributing}
    
## Test Instructions
${data.testInstructions}
    
### Questions
${data.questions} Contact me at ${data.email} or through GitHub at ${data.username} for any questions`;
}

module.exports = generateMarkdown;
