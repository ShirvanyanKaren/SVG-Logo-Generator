const fs = require("fs");
const inquirer = require("inquirer");


const questions = [
    {
    type: 'input',
    message: `Enter the three characters for your logo:`,
    name: `text`,
    validate: (input) => input.length <= 3,
    },
    {
    type: 'input',
    message: `Enter the color for your text (or a hexidecimal number):`,
    name: `textColor`,
    
    },
    {
    type: 'choices',
    message: `Enter the shape for your logo:`,
    name: `shape`,
    choices: ["triangle", "square", "circle"],
    
    },
    {
    type: 'input',
    message: `Enter the color for your logo (or a hexidecimal number):`,
    name: `logoColor`,
    
    },

]


function writeToFile(fileName, response){
    

}


function init() {
    inquirer.prompt (
        questions
    )
    .then((response) => {
        console.log(response);
        writeToFile("file", response)
    })
    .catch((error) => {
        if (err) throw err;
        console.log("Failed to generate information for the SVG logo");
    })



}

init();