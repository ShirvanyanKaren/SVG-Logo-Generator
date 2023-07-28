const {Triangle, Square, Circle} = require("./shapes");


describe('Triangle', () => {
    it('creates or renders a triangle svg logo', () => {
    const logoColor = 'green';
    const text = 'SVG'
    const textColor = 'white'
    const shape = new Triangle(undefined, logoColor, text, textColor);
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="0,200 300,200 150,0"  fill="green"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`);

    });



})


describe('Square', () => {
    it('creates or renders a square svg logo', () => {
    const logoColor = 'green';
    const text = 'SVG'
    const textColor = 'white'
    const shape = new Square(undefined, logoColor, text, textColor);
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="50" height="200" width="200"  fill="green"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`);

    });



})

describe('Circle', () => {
    it('creates or renders a circle svg logo', () => {
    const logoColor = 'green';
    const text = 'SVG'
    const textColor = 'white'
    const shape = new Circle(undefined, logoColor, text, textColor);
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80"  fill="green"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`);

    });



})