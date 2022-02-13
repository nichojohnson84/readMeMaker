// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${data.describe}

## Table of Contents
- ["Why did you build this?"](#reason)
- ["Installation"](#installation)
- ["How do you use the program?"](#usage)
- ["License and how to give feedback"](#license)

## Why did you build this?

- ${data.reason}

- ${data.learned}

## Installation and testing

${data.installation}

## How do you use the program?

${data.usage}

### What language or programs did you use?

${data.language}

### Do you already have future plans for improvements?

${data.plan}

### What did you learn while building this?

${data.learned}

## License

${data.license}

## Feedback

- If you want to leave feedback on improvments

- Let me know about any bugs

- You can visit my page on GitHub below that also contains my contact information.

### You can also visit my repo and see some other projects I am workin on.

## Questions
 -[${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
