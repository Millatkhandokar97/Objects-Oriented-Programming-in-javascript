// Function as a object in javascript

// function test(){
//     console.log('something');
// }


var rect = new Function('width', 'height',`this.width = width
    this.height = height
    
    this.draw = function () {
        console.log('I am rectangle');
        this.printProperties()
    },
        this.printProperties = function () {
            console.log('My width is ' + this.width);
            console.log('My height is ' + this.height);
        }`
        )
    
    
    var rect1 = new rect(10, 20)
    // console.log(rect1);
    rect1.draw()