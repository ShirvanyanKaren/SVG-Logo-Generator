const fs = require("fs");
const inquirer = require("inquirer");
const {Triangle, Square, Circle} = require('./lib/shapes');


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
    type: 'list',
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
    const answers = response;
    console.log(answers);
    const shape = answers.shape;
    console.log(shape);
    const text = answers.text;
    const textColor = answers.textColor;
    const logoColor = answers.logoColor;
    
    let logoFile;
    let userShape;
     if (shape === 'triangle') {
        logoFile = 'triangle.svg';
        userShape = new Triangle(undefined, logoColor, text, textColor);
     }
     else if (shape === 'square') {
        logoFile = 'square.svg';
        userShape = new Square(undefined, logoColor, text, textColor);
     }
     else if (shape === 'circle') {
        logoFile = 'circle.svg';
        userShape = new Circle(undefined, logoColor, text, textColor);
     }
     else {
        console.log("Your shape is invalide");
        return;
     }

    const svg = userShape.render();
    
    console.log(svg);
     
 

    fs.writeFile(logoFile, svg, (err) => {
        if (err) throw err;
    });
    console.log('Generated logo.svg');

}


function init() {
    inquirer.prompt (
        questions
    )
    .then((response) => {
        console.log(response);
        writeToFile("file", response)
    })
    .catch((err) => {
        if (err) throw err;
        console.log("Failed to generate information for the SVG logo");
    })
    



}

init();