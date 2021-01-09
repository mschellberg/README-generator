// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
        
    },
    {
        type: "input",
        name: "Description",
        message: "Please write a description of your project"
        
    },
    {
        type: "input",
        name: "Installation",
        message: "How do you install your project?"
        
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide instructions and examples of your project"  
    },
    {
        type: "list",
        name: "License",
        message: "Which license are you using?",
        choices: [
            "MIT",
            "GNU General Public License",
            "Boost Software License",
            "Mozilla Public License"
        ]
    },
    {
        type: "input",
        name: "Contribution",
        message: "Are there any contributors?"
    },
    {
        type: "input",
        name: "Username",
        message: "Please enter your Github username"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your Email?"
    }
];

function generateMarkdown(response) {
    return `# ${response.Title} 

## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [License](#license)
* [Questions](#questions)

### Description:
${response.Description}
### Installation:
${response.Installation}
### Usage:
${response.Usage}
### Contribution:
${response.Contribution}
### License:
${response.License}


### Questions:
For further questions please contact me by using one of the following
<br />
* [Github: ${response.Username}](https://github.com/${response.Username})<br />
* ${response.Email}<br />
`
}


function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generateMarkdown(answers);
     
        fs.writeFile("README.md", response, (err) => {
            if (err) throw err;
    
            console.log("Created README.md");
        });
        
    });
}


// Function call to initialize app
init();
