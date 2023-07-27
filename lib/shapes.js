class Shape{

    constructor(shape = '', color, text, textColor){
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.textColor = textColor;

    }
    render() {
 return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${this.shape}  fill="${this.color}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;



    }



}

class Circle extends Shape {
    constructor(circle, color, text, textColor){
        circle = `circle cx="150" cy="100" r="80"`;
        super(circle, color, text, textColor)
        // this.shape = `circle cx="150" cy="100" r="80"`
    }




}



class Triangle extends Shape {
    constructor(triangle, color, text, textColor){
     triangle = `polygon points="0,200 300,200 150,0"`;
    super(triangle, color, text, textColor)
    // this.shape = `polygon points="0,200 300,200 150,0"`
    }





}




class Square extends Shape {
    constructor(square, color, text, textColor){
         square = `rect x="50" height="200" width="200"`
        super(square, color, text, textColor)
    //    this.shape = `x="50" height="200" width="200"` 
    }


 


}


module.exports = {Square, Circle, Triangle}








// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>`


// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <sqaure cx="150" cy="100" r="80" fill="green" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>`

// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <polygon cx="150" cy="100" r="80" fill="green" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>`