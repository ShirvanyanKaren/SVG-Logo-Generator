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
   
    let userShape;
     if (shape === 'triangle' || shape === 'Triangle') {
        userShape = new Triangle(logoColor, text, textColor);
     }
     else if (shape === 'square' || shape === 'Square') {
        userShape = new Square(logoColor, text, textColor);
     }
     else if (shape === 'circle' || shape === 'Circle') {
        userShape = new Circle(logoColor, text, textColor);
     }
     else {
        console.log("Your shape is invalide");
        return;
     }

    const svg = userShape.render();
    //  svgString = userShape(logoColor, shape, text, textColor);
     console.log(svg);


     fs.writeFile("logo.svg", svg, (err) => {
        if (err) throw err;
    });


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