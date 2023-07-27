class Shape{

    constructor(){
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.textColor = textColor;

    }
    render(color, shape, text, textColor) {
        return 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${this.shape} cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`



    }



}

class Circle extends Shape {
    constructor(){
        circle = this.shape;
    }


    render (color, circle, text, textColor ) {

    }


}



class Triangle extends Shape {
    constructor(){
        polygon = this.shape;
    }


    render (color, polygon, text, textColor ) {

    }


}




class Square extends Shape {
    constructor(){
        square = this.shape;
    }


    render (color, square, text, textColor ) {

    }


}











`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`


`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<sqaure cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`

`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`