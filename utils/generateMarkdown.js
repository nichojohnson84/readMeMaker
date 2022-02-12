// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${data.describe}

## Table of Contents
- ["Why did you build this?"](#reason)
- [Installation](#installation)
- ["How does it work?"](#usage)
- ["What language or programs did you use?"](#language)
- [License](#license)

## Why did you build this?

-${data.reason}

-${data.function}

-${data.learned}


##Installation

${data.installation}

##How does this program work?

${data.usage}

##What language or programs did you use?

${data.language}

##License

${data.license}

###Do you already have future plans for improvements?

${data.plan}

###What did you learn while building this?

${data.learned}

##Feedback

${data.feedback}

###You can also visit my repo or leave me comments at my page on GitHub.

[link](https://github.com/nichojohnson84)

`;
}

module.exports = generateMarkdown;
